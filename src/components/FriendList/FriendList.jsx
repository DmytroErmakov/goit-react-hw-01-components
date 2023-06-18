import React from 'react';
import PropTypes from 'prop-types';
import { FriendListItem } from '../FriendListItem/FriendListItem'
import styles from './FriendList.module.css';

export const FriendList = ({ friends }) => {
  return (
    <ul className={styles.friendList}>
   
        {friends.map(friend => (
          <FriendListItem
            key={friend.id}
            id={friend.id}
            avatar={friend.avatar}
            name={friend.name}
            isOnline={friend.isOnline}
          />
        ))}
   
    </ul>
  );
};


FriendList.propsTypes = {
  friends: PropTypes.array.isRequired,
};
