import React from "react";
import "./Notifications.css";
import closeIcon from "../assets/close-icon.png";
import NotificationItem from "./NotificationItem";
import PropTypes from "prop-types";
import NotificationItemShape from "./NotificationItemShape";


const Notifications = ({ displayDrawer, listNotifications }) => {
    return (
        <div className="notification-container">
            <div className="menuItem">
                Your notifications
            </div>
            {displayDrawer && (
                <div className="Notifications">
                    <p>Here is the list of notifications</p>
                    <ul style={{ marginLeft: '2em', marginTop: '.5em' }}>
                        {listNotifications.length !== 0 ? listNotifications.map((notification) => (
                            <NotificationItem key={notification.id} type={notification.type} value={notification.value} html={notification.html} />
                        )) : <NotificationItem value="No new notification for now" />}
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
    displayDrawer: PropTypes.bool,
    listNotifications: PropTypes.arrayOf(NotificationItemShape)
};

Notifications.defaultProps = {
    displayDrawer: false,
    listNotifications: []
};

export default Notifications;
