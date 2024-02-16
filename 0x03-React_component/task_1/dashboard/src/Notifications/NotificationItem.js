import React from 'react';
import PropTypes from 'prop-types';

const NotificationItem = ({ type='default', html, value }) => {
    if (value && type) {
        return (
            <li data-notification-type={type}>{value}</li>

        )
    }
    return (
        <li data-notification-type="urgent" dangerouslySetInnerHTML={{ __html: html }}></li>
    )
}

NotificationItem.propTypes = {
    type: PropTypes.string.isRequired,
    __html: PropTypes.shape({ html: PropTypes.string }),
    value: PropTypes.string
}

NotificationItem.defaultProps = {
    type: 'default'
}

export default NotificationItem;
