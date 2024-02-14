import React from 'react';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import Login from '../Login/Login';
import Notifications from '../Notifications/Notifications';
import CourseList from '../CourseList/CourseList';
import "./App.css";
import PropTypes from 'prop-types';

function App({ isLoggedIn }) {

    const listCourses = [
        { id: 1, name: 'ES6', credit: 60 },
        { id: 2, name: 'Webpack', credit: 20 },
        { id: 3, name: 'React', credit: 40 }
    ];

    return (
        <>
            <Notifications />
            <div className="App">
                <Header />
                {isLoggedIn ? <CourseList listCourses={listCourses} /> : <Login />}
                <Footer />
            </div>
        </>
    );
}

App.propTypes = {
    isLoggedIn: PropTypes.bool
};

App.defaultProps = {
    isLoggedIn: false
};

export default App;
