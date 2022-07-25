import {
  createContext,
  ReactNode,
  useContext,
  useEffect,
  useState,
} from "react";
import { api } from "../services/api";

interface TransactionProps {
  _id: number;
  title: string;
  value: number;
  type: string;
  category: string;
  createdAt: string;
}

type TransactionInput = Omit<TransactionProps, "_id" | "createdAt">;

interface TransactionsProviderProps {
  children: ReactNode;
}

interface TransactionContextData {
  transactions: TransactionProps[];
  addTransaction: (transaction: TransactionInput) => Promise<void>;
  updtTransaction: (transactionInput: TransactionInput ,transaction: TransactionProps) => Promise<void>;
  rmvTransaction: (transaction: TransactionProps) => Promise<void>;
  loading: boolean;
}

const TransactionsContext = createContext<TransactionContextData>(
  {} as TransactionContextData
);

export const TransactionsProvider = ({
  children,
}: TransactionsProviderProps) => {
  const [transactions, setTransactions] = useState<TransactionProps[]>([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    api.get("/transactions").then((response) => {
      return setTransactions(response.data.transactions);
    });
    setLoading(true);
  }, []);

  const addTransaction = async (transactionInput: TransactionInput) => {
    const response = await api.post("/transaction", {
      ...transactionInput,
      createdAt: new Date(),
    });
    const { transaction } = response.data;
    setTransactions([...transactions, transaction]);
  };

  const updtTransaction = async (transactionInput: TransactionInput, transaction: TransactionProps) => {
    const response = await api.patch(`/transaction/${transaction._id}` , {...transactionInput})
    const index = transactions.indexOf(transaction)
    setTransactions(transactions.map(item => item === transactions[index] ? response.data.post : item));
  }

  const rmvTransaction = async (transaction : TransactionProps) => {
    await api.delete(`/transaction/${transaction._id}`)
    setTransactions(transactions.filter(item => item !== transaction))
  }

  return (
    <TransactionsContext.Provider
      value={{ transactions, addTransaction, updtTransaction, rmvTransaction, loading }}
    >
      {children}
    </TransactionsContext.Provider>
  );
};

export const useTransactions = () => {
  const context = useContext(TransactionsContext);
  return context;
};
