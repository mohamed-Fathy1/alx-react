import React from "react";
import "./Notifications.css";
import closeIcon from "../assets/close-icon.png";
import { getLatestNotification } from "../utils/utils";
import NotificationItem from "./NotificationItem";
import PropTypes from "prop-types";

const Notifications = ({ displayDrawer }) => {
    return (
        <div className="notification-container">
            <div className="menuItem">
                Your notifications
            </div>
            {displayDrawer && (
                <div className="Notifications">
                    <p>Here is the list of notifications</p>
                    <ul style={{ marginLeft: '2em', marginTop: '.5em' }}>
                        <NotificationItem value="New course available" />
                        <NotificationItem type="urgent" value="New resume available" />
                        <NotificationItem html={{ __html: getLatestNotification() }} />
                    </ul>

                    <button style={{ position: 'absolute', right: '2em', top: '1em', background: 'none', border: 'none' }}
                        aria-label="Close"
                        onClick={() => console.log('Close button has been clicked')}
                    >
                        <img src={closeIcon} alt="Close" width="20" height="20" />
                    </button>
                </div>
            )}
        </div>
    );
};

Notifications.propTypes = {
    displayDrawer: PropTypes.bool
};

Notifications.defaultProps = {
    displayDrawer: false
};

export default Notifications;
