import React from 'react';
import './App.css';
import logo from './logo.jpg';
import { getFullYear, getFooterCopy } from './utils'

function App() {
    return (
        <>
            <div className="App-header">
                <img src={logo} alt="Holberton Logo" />
                <h1>School dashboard</h1>
            </div>
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
            <div className="App-footer">
                <p>Copyright {getFullYear()} - {getFooterCopy()}</p>
            </div>
        </>
    );
}

export default App;
