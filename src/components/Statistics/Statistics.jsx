import style from './statistics.module.css';
export const Statistics = ({ title, stats }) => {
   return (
      <section className={style.statistics}>
         {title && <h2 className={style.stat_title}>{title}</h2>}

         <ul className={style.stat_list}>
            {stats.map(({ id, label, percentage }) => {
               return (
                  <li
                     className={style.stat_item}
                     key={id}
                     style={{
                        backgroundColor: `${
                           '#' + Math.floor(Math.random() * 16777215).toString(16)
                        }`,
                     }}
                  >
                     <span className={style.stat_label}>{label}</span>
                     <span className={style.stat_percentage}>{percentage}&#37;</span>
                  </li>
               );
            })}
         </ul>
      </section>
   );
};
