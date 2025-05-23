import * as Lale from "./Transaction.module.css";

const TransactionHistory = ({ items }) => {
  return (
    <table className={Lale.transactionHistory}>
      <thead>
        <tr className={Lale.transactionHistoryHead}>
          <th className={Lale.transactionHistoryItem}>Type</th>
          <th className={Lale.transactionHistoryItem}>Amount</th>
          <th className={Lale.transactionHistoryItem}>Currency</th>
        </tr>
      </thead>

      <tbody>
        {items.map((item, index) => {
          return (
            <tr key={index} className={Lale.transactionList}>
              <td className={Lale.transactionItem}>{item.type}</td>
              <td className={Lale.transactionItem}>{item.amount}</td>
              <td className={Lale.transactionItem}>{item.currency}</td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
};
export default TransactionHistory;
