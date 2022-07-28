import { TableContainer } from "./styles";
import { useTransactions } from "../../hooks/useTransactions";
import { LoadingSpin } from "../Loading";
import { Transaction } from "../Transaction";

export const Table = () => {
  const { transactions, loading } = useTransactions();

  return (
    <TableContainer>
      <table>
        <thead>
          <tr>
            <th>Title</th>
            <th>Value</th>
            <th>Category</th>
            <th>Date</th>
            <th>Actions</th>
          </tr>
        </thead>
        {!loading ? (
          <tbody>
            {transactions.map((transaction) => {
              return (
                <Transaction key={transaction._id} transaction={transaction} />
              );
            })}
          </tbody>
        ) : (
          <tbody>
            <tr>
              <td>
                <LoadingSpin />
              </td>
            </tr>
          </tbody>
        )}
      </table>
    </TableContainer>
  );
};
