import React from "react";
import PropTypes from "prop-types";
import withLogging from "../HOC/WithLogging";
import { StyleSheet, css } from "aphrodite";


const styles = StyleSheet.create({
    listItem: {
        marginLeft: '2em'
    },
    default: {
        color: 'var(--color-info)'
    },
    urgent: {
        color: 'var(--color-danger)'
    }
})

class NotificationItem extends React.PureComponent {
  render() {
    const { type, value, html, markAsRead} = this.props;
    return (
      <>
        {type && value ? (
          <li onClick={markAsRead} data-notification-type={type} className={css(styles.listItem, styles[type])}>
            {value}
          </li>
        ) : null}
        {html && <li onClick={markAsRead} dangerouslySetInnerHTML={{ __html: html }} className={css(styles.listItem, styles.urgent)} ></li>}
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
