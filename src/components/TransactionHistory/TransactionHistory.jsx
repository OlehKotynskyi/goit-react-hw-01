import style from './transactionHistory.module.css';

export const TransactionHistory = ({ items }) => {
   return (
      <table className={style.transaction_history}>
         <thead>
            <tr>
               <th>Type</th>
               <th>Amount</th>
               <th>Currency</th>
            </tr>
         </thead>
         <tbody>
            {items.map(({ id, type, amount, currency }) => {
               return (
                  <tr key={id}>
                     <td>{type}</td>
                     <td>{amount}</td>
                     <td>{currency}</td>
                  </tr>
               );
            })}
         </tbody>
      </table>
   );
};
