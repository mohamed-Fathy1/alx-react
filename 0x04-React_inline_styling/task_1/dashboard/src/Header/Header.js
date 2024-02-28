import React from 'react';
import logo from '../assets/holberton-logo.jpg';
import { StyleSheet, css } from 'aphrodite';

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


function Header() {
    return (
        <header className={css(styles.appHeader)}>
            <img src={logo} alt="Holberton Logo" className={css(styles.headerImage)} />
            <h1 className={css(styles.headerTitle)}>School dashboard</h1>
        </header>
    );
}

export default Header;
