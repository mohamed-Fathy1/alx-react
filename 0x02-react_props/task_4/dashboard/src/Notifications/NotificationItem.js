import React from 'react';
import PropTypes from 'prop-types';

const NotificationItem = ({ type='default', html, value }) => {
    if (value && type) {
        return (
            <li data-notification-type={type}>{value}</li>
        )
    }
    return (
        <li data-notification-type="urgent" dangerouslySetInnerHTML={html} />
    )
}

NotificationItem.propTypes = {
    type: PropTypes.string,
    html: PropTypes.shape({ __html: PropTypes.string }),
    value: PropTypes.string
}

export default NotificationItem;
