import style from './friendListItem.module.css';

export const FriendListItem = ({ avatar, name, isOnline }) => {
   const statusClasses = isOnline ? style.friendGreen : style.friendRed;
   return (
      <li className={style.friendItem}>
         <img className={style.friendAvatar} src={avatar} alt="User avatar" width="48" />
         <p className={style.friendName}>{name}</p>
         <p className={statusClasses}>{`${isOnline ? 'Online' : 'Offline'}`}</p>
      </li>
   );
};
