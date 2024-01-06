import PropTypes from 'prop-types';
import style from "./transactionHistory.module.css";

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
      {items.map(({ id, type, amount, currency }) => {
        return (
          <tbody key={id}>
            <tr id={id}>
              <td>{type}</td>
              <td>{amount}</td>
              <td>{currency}</td>
            </tr>
          </tbody>
        );
      })}
    </table>
  );
};

TransactionHistory.propTypes = {
  items: PropTypes.arrayOf(PropTypes.shape).isRequired,
};
