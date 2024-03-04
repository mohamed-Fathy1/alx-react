import React from 'react';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import Login from '../Login/Login';
import Notifications from '../Notifications/Notifications';
import CourseList from '../CourseList/CourseList';
import BodySectionWithMarginBottom from '../BodySection/BodySectionWithMarginBottom';
import { getLatestNotification } from "../utils/utils";
import PropTypes from 'prop-types';
import BodySection from '../BodySection/BodySection';
import './uni.css'
import { StyleSheet, css } from 'aphrodite';


const footerStyles = StyleSheet.create({
    footer: {
        paddingBlock: '1rem',
    }
});

const bodyStyles = StyleSheet.create({
    root: {
        '--font-size-small': '1.2rem',
        '--font-size-medium': '1.6rem',
        '--font-size-large': '1.8rem',
        '--font-size-xlarge': '2.4rem',

        '--color-primary': '#E0354B',
        '--color-info': '#3A7CA5',
        '--color-danger': '#D7263D'
    },
    body: {
        fontFamily: '"Roboto", sans-serif',
        minHeight: '100vh'
    }
})

class App extends React.Component {

    constructor(props) {
        super(props);
        this.handleKeydown = this.handleKeydown.bind(this);
    }

    handleKeydown(event) {
        if (event.ctrlKey && event.key === 'h') {
            event.preventDefault();
            alert('Logging you out');
            this.props.logOut();
        }
    }

    componentDidMount() {
        window.addEventListener('keydown', this.handleKeydown);
    }

    render() {

        const listCourses = [
            { id: 1, name: 'ES6', credit: 60 },
            { id: 2, name: 'Webpack', credit: 20 },
            { id: 3, name: 'React', credit: 40 }
        ];

        const listNotifications = [
            { id: 1, type: 'default', value: 'New course available' },
            { id: 2, type: 'urgent', value: 'New resume available' },
            { id: 3, type: 'urgent', html: getLatestNotification() }
        ];

        return (
            <div className={css(bodyStyles.root, bodyStyles.body)}>
                <Notifications displayDrawer={true} listNotifications={listNotifications} />
                <div className="App">
                    <Header />
                    {this.props.isLoggedIn ? (
                        <BodySectionWithMarginBottom title="Course list">
                            <CourseList listCourses={listCourses} />
                        </BodySectionWithMarginBottom>
                    ) : (
                        <BodySectionWithMarginBottom title="Log in to continue">
                            <Login />
                        </BodySectionWithMarginBottom>
                    )}
                    <BodySection title="News from the School">
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque et neque ex. Suspendisse potenti. Suspendisse tempus mi dui, auctor laoreet erat luctus nec. Nunc nec tincidunt arcu. Phasellus at ligula ut mauris convallis pharetra. Proin euismod erat metus, ut pretium mi eleifend at. Integer sit amet laoreet est. Nunc et odio et nibh bibendum tempus. </p>
                    </BodySection>
                    <div className={css(footerStyles.footer)}>
                        < Footer />
                    </div>
                </div>
            </div>
        );
    }
}

App.propTypes = {
    isLoggedIn: PropTypes.bool,
    logOut: PropTypes.func
};

App.defaultProps = {
    isLoggedIn: false,
    logOut: () => undefined
};

export default App;
