import style from './profile.module.css';
export const Profile = ({ user: { username, avatar, stats, tag, location } }) => {
   return (
      <div className={style.profile}>
         <div className={style.profile_description}>
            <div className={style.avatar}>
               <img src={avatar} alt={username} />
            </div>
            <p className={style.profile_name}>{username}</p>
            <p className={style.profile_tag}>&#64;{tag}</p>
            <p className={style.profile_location}>{location}</p>
         </div>

         <ul className={style.profile_list}>
            <li className={style.profile_item}>
               <span className={style.profile_label}>Followers</span>
               <span className={style.profile_quantity}>{stats.followers}</span>
            </li>
            <li className={style.profile_item}>
               <span className={style.profile_label}>Views</span>
               <span className={style.profile_quantity}>{stats.views}</span>
            </li>
            <li className={style.profile_item}>
               <span className={style.profile_label}>Likes</span>
               <span className={style.profile_quantity}>{stats.likes}</span>
            </li>
         </ul>
      </div>
   );
};
