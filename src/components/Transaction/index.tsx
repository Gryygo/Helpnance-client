import { useState } from "react";
import { FaPen, FaTrash } from "react-icons/fa";
import { useTransactions } from "../../hooks/useTransactions";
import { EditForm } from "../EditForm";

interface TransactionProps {
  transaction: {
    _id: number;
    title: string;
    value: number;
    type: string;
    category: string;
    createdAt: string;
  };
}

export const Transaction = ({ transaction }: TransactionProps) => {
  const { rmvTransaction } = useTransactions();

  const handleDelete = (event: any, { transaction }: TransactionProps) => {
    const container = event.currentTarget.closest("tr");
    container.style.transition = "all .3s";
    container.style.opacity = "0";
    setTimeout(function () {
      rmvTransaction(transaction);
    }, 300);
  };

  const [isTransactionOpen, setIsTransactionOpen] = useState(false);

  const handleOpenTransaction = () => {
    setIsTransactionOpen(true);
  };
  const handleCloseTransaction = () => {
    setIsTransactionOpen(false);
  };

  return (
    <>
      <tr>
        <td>{transaction.title}</td>
        <td className={transaction.type}>
          {new Intl.NumberFormat("pt-BR", {
            style: "currency",
            currency: "BRL",
          }).format(transaction.value)}
        </td>
        <td>{transaction.category}</td>
        <td>
          {new Intl.DateTimeFormat("pt-BR").format(
            new Date(transaction.createdAt)
          )}
        </td>
        <td>
          <div className="button_cont">
            <button type="button" onClick={handleOpenTransaction}>
              <FaPen className="icons" />
            </button>
            <button
              type="button"
              onClick={(e) => handleDelete(e, { transaction })}
            >
              <FaTrash className="icons" />
            </button>
          </div>
        </td>
      </tr>
      <EditForm onRequestClose={handleCloseTransaction} isOpen={isTransactionOpen} transaction={transaction} />
    </>
  );
};
