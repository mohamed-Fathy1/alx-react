import React from 'react';
import logo from '../assets/holberton-logo.jpg';
import { StyleSheet, css } from 'aphrodite';
import { AppContext } from '../App/AppContext';

const mobile = '@media(max-width: 768px)';

const styles = StyleSheet.create({
    appHeader: {
        display: 'flex',
        alignItems: 'center',
        borderBottom: '4px solid var(--color-primary)',
        [mobile]: {
            flexDirection: 'column',
        }
    },
    headerImage: {
        height: '12rem',
        [mobile]: {
            height: '8rem',
        }
    },
    headerTitle: {
        marginLeft: '1rem',
        color: 'var(--color-primary)',
        [mobile]: {
            marginLeft: 0,
            marginTop: '1rem',
        }
    }
});


class Header extends React.Component {
    render() {
        const { user, logOut } = this.context
        return (
            <>
                <header className={css(styles.appHeader)}>
                    <img src={logo} alt="Holberton Logo" className={css(styles.headerImage)} />
                    <h1 className={css(styles.headerTitle)}>School dashboard</h1>
                </header>

                {user.isLoggedIn && (
                    <>
                        <hr />
                        <section id="logoutSection">
                            Welcome {user.email} <a href='#' onClick={logOut}>(logout)</a>
                        </section>
                    </>
                )}
            </>
        );
    }
}

Header.contextType = AppContext

export default Header;
