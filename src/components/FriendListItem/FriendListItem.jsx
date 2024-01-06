import PropTypes from "prop-types";
import style from "./friendListItem.module.css";

export const FriendListItem = ({ avatar, name, isOnline, id }) => {
  return (
    <li className={style.friend_item} key={id}>
      <img
        className={style.friend_avatar}
        src={avatar}
        alt="User avatar"
        width="48"
      />
      <p className={style.friend_name}>{name}</p>
      <p
        className={style.friend_status}
        style={{ color: `${isOnline ? "green" : "red"}` }}
      >{`${isOnline ? "Online" : "Offline"}`}</p>
    </li>
  );
};

FriendListItem.propTypes = {
  avatar: PropTypes.string,
  name: PropTypes.string.isRequired,
  isOnline: PropTypes.bool,
  id: PropTypes.number,
};
