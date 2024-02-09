import { getFullYear, getFooterCopy } from '../utils/utils';
import React from 'react';
import Header from '../Header/Header';
import './App.css';

function App() {
    return (
        <>
            <Header />
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
