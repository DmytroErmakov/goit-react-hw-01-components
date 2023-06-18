import React from 'react';
import PropTypes from 'prop-types';
import styles from './FriendListItem.module.css';

export const FriendListItem = ({ avatar, name, isOnline }) => {
  return (
    <li className={styles.item}>
      <span className={isOnline ? styles.statusOnline : styles.statusOffline}></span>
      <img
        className={styles.avatar}
        src={avatar}
        alt="User avatar"
        width="48"
      />
      <p className={styles.name}>{name}</p>
    </li>
  );
};

FriendListItem.propsTypes = {
  avatar: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  isOnline: PropTypes.bool.isRequired,
};
