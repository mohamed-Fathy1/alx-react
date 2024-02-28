import React from 'react';
import withLogging from '../HOC/WithLogging';
import { StyleSheet, css } from 'aphrodite';


const styles = StyleSheet.create({

    AppBody: {
        marginTop: '1rem',
        padding: 'calc(2rem + 2vw)',
        minHeight: '60vh',
        '@media (max-width: 768px)': {
            height: '40vh'
        }
    }

})

function Login() {
    return (
        <>
            <div className={css(styles.AppBody)}>
                <p>Login to access the full dashboard</p>
                <form action="" style={{ marginTop: '1rem' }}>
                    <label htmlFor="email">Email: </label>
                    <input type="email" id="email" name="email" />
                    <label htmlFor="password">Password: </label>
                    <input type="password" id="password" name="password" />
                    <button type="submit">OK</button>
                </form>
            </div>
        </>
    );
}

export default withLogging(Login)
