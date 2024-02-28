import React from "react";
import "./Notifications.css";
import closeIcon from "../assets/close-icon.png";
import NotificationItem from "./NotificationItem";
import PropTypes from "prop-types";
import NotificationItemShape from "./NotificationItemShape";
import withLogging from "../HOC/WithLogging";


class Notifications extends React.Component {

    constructor(props) {
        super(props);
        this.markAsRead = this.markAsRead.bind(this);
    }

    shouldComponentUpdate(nextProps) {
        return nextProps.listNotifications.length > this.props.listNotifications.length;
    }

    markAsRead(id) {
        console.log(`Notification ${id} has been marked as read`);
    }

    render() {
        return (
            <div className="notification-container">
                <div className="menuItem">
                    Your notifications
                </div>
                {this.props.displayDrawer && (
                    <div className="Notifications">
                        <ul style={{ marginTop: '.5em' }}>
                            {this.props.listNotifications.length !== 0 ? (
                                <>
                                    <p>Here is the list of notifications</p>

                                    {this.props.listNotifications.map((notification) => (
                                        <NotificationItem
                                            key={notification.id}
                                            type={notification.type}
                                            value={notification.value}
                                            html={notification.html}
                                            markAsRead={() => this.markAsRead(notification.id)}
                                        />
                                    ))
                                    }
                                </>
                            ) : <NotificationItem value="No new notification for now" />
                            }
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
    }
};

Notifications.propTypes = {
    displayDrawer: PropTypes.bool,
    listNotifications: PropTypes.arrayOf(NotificationItemShape)
};

Notifications.defaultProps = {
    displayDrawer: false,
    listNotifications: []
};

export default withLogging(Notifications);
