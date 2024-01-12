import style from './friendList.module.css';
import { FriendListItem } from '../FriendListItem/FriendListItem';

export const FriendList = ({ friends }) => {
   return (
      <ul className={style.friend_list}>
         {friends.map(({ id, avatar, name, isOnline }) => (
            <FriendListItem key={id} avatar={avatar} name={name} isOnline={isOnline} />
         ))}
      </ul>
   );
};
