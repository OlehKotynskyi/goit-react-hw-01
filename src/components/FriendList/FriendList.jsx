import style from './friendList.module.css';

export const FriendList = ({ friends }) => {
   return (
      <ul className={style.friend_list}>
         {friends.map(({ id, avatar, name, isOnline }) => {
            return (
               <li className={style.friend_item} key={id}>
                  <img className={style.friend_avatar} src={avatar} alt="User avatar" width="48" />
                  <p className={style.friend_name}>{name}</p>
                  <p
                     className={style.friend_status}
                     style={{ color: `${isOnline ? 'green' : 'red'}` }}
                  >{`${isOnline ? 'Online' : 'Offline'}`}</p>
               </li>
            );
         })}
      </ul>
   );
};
