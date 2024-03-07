import React from 'react';
import './Login.css';

export default function Login() {
    return (
        <>
            <div className="App-body">
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
