import PropTypes from 'prop-types';
import css from './Friends.module.css';

export const FriendListItem = ({ avatar, isOnline, name }) => {
  return (
    <li className={css.friendItem}>
      <div className={isOnline === true ? css.online : css.offline}>
        {isOnline}
      </div>
      <img src={avatar} alt={name} className={css.avatar} />
      <p className={css.name}>{name}</p>
    </li>
  );
};

FriendListItem.propTypes = {
  avatar: PropTypes.string.isRequired,
  isOnline: PropTypes.bool.isRequired,
  name: PropTypes.string.isRequired,
};
