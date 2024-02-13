import React from "react";
import "./Notifications.css";
import closeIcon from "../assets/close-icon.png";
import { getLatestNotification } from "../utils/utils";

const Notifications = () => {
    return (
        <div className="Notifications">
            <p>Here is the list of notifications</p>
            <ul style={{ marginLeft: '5em', marginTop: '1em'}}>
                <li data-priority="default">New course available</li>
                <li data-priority="urgent">New resume available</li>
                <li data-priority="urgent" dangerouslySetInnerHTML={{ __html: getLatestNotification() }} />
            </ul>

            <button style={{ position: 'absolute', right: '2em', top: '1em', background: 'none', border: 'none' }}
                aria-label="Close"
                onClick={() => console.log('Close button has been clicked')}
            >
                <img src={closeIcon} alt="Close" width="20" height="20"/>
        </button>
        </div>
    );
};

export default Notifications;
