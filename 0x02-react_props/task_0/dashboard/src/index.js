import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App/App';
import Notifications from './Notifications/Notifications';

const rootNotif = ReactDOM.createRoot(document.getElementById('root-notifications'));
rootNotif.render(
    <React.StrictMode>
        <Notifications />
    </React.StrictMode>
);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
