import React from 'react';
import PropTypes from 'prop-types';

const NotificationItem = ({ type='default', html, value, markAsRead }) => {
    if (value && type) {
        return (
            <li data-notification-type={type} onClick={markAsRead}>{value}</li>

        )
    }
    return (
        <li data-notification-type="urgent" dangerouslySetInnerHTML={{ __html: html }} onClick={markAsRead}></li>
    )
}

NotificationItem.propTypes = {
    type: PropTypes.string.isRequired,
    __html: PropTypes.shape({ html: PropTypes.string }),
    value: PropTypes.string,
    markAsRead: PropTypes.func
}

NotificationItem.defaultProps = {
    type: 'default',
    markAsRead: () => {}
}

export default NotificationItem;
