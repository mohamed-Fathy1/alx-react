import React from "react";
import "./Notifications.css";
import PropTypes from "prop-types";
import withLogging from "../HOC/WithLogging";

class NotificationItem extends React.PureComponent {
  render() {
    const { type, value, html, markAsRead} = this.props;
    return (
      <>
        {type && value ? (
          <li onClick={markAsRead} data-notification-type={type}>
            {value}
          </li>
        ) : null}
        {html ? <li onClick={markAsRead} data-urgent dangerouslySetInnerHTML={{ __html: html }}></li> : null}
      </>
    );
  }
}

NotificationItem.propTypes = {
  type: PropTypes.string.isRequired,
  value: PropTypes.string,
  __html: PropTypes.shape({
    html: PropTypes.string,
  }),
  markAsRead: PropTypes.func,
};

NotificationItem.defaultProps = {
  type: "default",
  markAsRead: () => undefined,
};

export default withLogging(NotificationItem);
