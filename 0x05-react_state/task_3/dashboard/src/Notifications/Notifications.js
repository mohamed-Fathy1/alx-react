import React from "react";
import closeIcon from "../assets/close-icon.png";
import NotificationItem from "./NotificationItem";
import PropTypes from "prop-types";
import NotificationItemShape from "./NotificationItemShape";
import withLogging from "../HOC/WithLogging";
import { StyleSheet, css } from 'aphrodite';


const opacityAnim = {
    '0%': { opacity: 0.5 },
    '100%': { opacity: 1 }
};

const bounceAnim = {
    '0%': { transform: 'translateY(0px)' },
    '33%': { transform: 'translateY(-5px)' },
    '66%': { transform: 'translateY(5px)' },
    '100%': { transform: 'translateY(0px)' },
};

const notificationStyles = StyleSheet.create({
    notifications: {
        fontSize: 'var(--font-size-small)',
        padding: '1em 2em',
        border: '2px dashed var(--color-primary)',
        borderRadius: '2px',
        position: 'relative',
        marginTop: '.6rem',
        backgroundColor: '#FFFFFF',
        '@media (max-width: 900px)': {
            width: '100%',
            height: '100%',
            marginTop: 0,
            padding: 0,
            fontSize: '20px',
            border: 0
        }
    },
    notificationContainer: {
        position: 'fixed',
        top: '1rem',
        right: '1rem',
        width: '100%',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'flex-end',
        zIndex: 1000,
        '@media (max-width: 900px)': {
            height: '100%',
            top: 0,
            right: 0,
        }
    },
    menuItem: {
        fontWeight: 'bold',
        ':hover': {
            cursor: 'pointer',
            animationName: [opacityAnim, bounceAnim],
            animationDuration: '1s, 0.5s',
            animationIterationCount: '3'
        }
    },
    disable: {
        '@media (max-width: 900px)': {
            display: 'none'
        }
    }
});

class Notifications extends React.Component {

    constructor(props) {
        super(props);
        this.markAsRead = this.markAsRead.bind(this);
    }

    shouldComponentUpdate(nextProps) {
        return nextProps.listNotifications.length > this.props.listNotifications.length ||
            this.props.displayDrawer != nextProps.displayDrawer;
    }

    markAsRead(id) {
        console.log(`Notification ${id} has been marked as read`);
    }

    render() {
        return (
            <div className={css(notificationStyles.notificationContainer)}>
                {!this.props.displayDrawer ? (<div
                    className={css(notificationStyles.menuItem, this.props.displayDrawer && notificationStyles.disable)}
                    onClick={this.props.handleDisplayDrawer}
                >
                    Your notifications
                </div>
                ) : (
                    <div className={css(notificationStyles.notifications)}>
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
                            onClick={() => {
                                console.log('Close button has been clicked')
                                this.props.handleHideDrawer()
                            }}
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
    listNotifications: PropTypes.arrayOf(NotificationItemShape),
    handleHideDrawer: () => { },
    handleDisplayDrawer: () => { }
};

Notifications.defaultProps = {
    displayDrawer: false,
    listNotifications: [],
    handleHideDrawer: PropTypes.func,
    handleDisplayDrawer: PropTypes.func
};

export default withLogging(Notifications);
