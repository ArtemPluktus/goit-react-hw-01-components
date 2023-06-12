import PropTypes from 'prop-types';
import { FriendListItem } from './FriendListItem.jsx';
import css from './Friends.module.css';

export const FriendsList = ({ friendsData }) => {
  return (
    <ul className={css.friendList}>
      {friendsData.map(({ avatar, name, isOnline, id }) => {
        return (
          <FriendListItem
            key={id}
            avatar={avatar}
            name={name}
            isOnline={isOnline}
          />
        );
      })}
    </ul>
  );
};

FriendsList.propTypes = {
  friendsData: PropTypes.arrayOf(
    PropTypes.exact({
      avatar: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      isOnline: PropTypes.bool.isRequired,
      id: PropTypes.number.isRequired,
    })
  ),
};
