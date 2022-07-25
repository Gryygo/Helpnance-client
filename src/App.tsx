import { Dashboard } from "./components/Dashboard";
import { Header } from "./components/Header";
import { GlobalStyle } from "./styles/global";
import Modal from "react-modal";
import { useState } from "react";
import { AddForm } from "./components/AddForm";
import { TransactionsProvider } from "./hooks/useTransactions";

Modal.setAppElement("#root");

export const App = () => {
  const [isTransactionOpen, setIsTransactionOpen] = useState(false);

  const handleOpenTransaction = () => {
    setIsTransactionOpen(true);
  };
  const handleCloseTransaction = () => {
    setIsTransactionOpen(false);
  };

  return (
    <TransactionsProvider>
      <Header onOpenTransaction={handleOpenTransaction} />
      <Dashboard />
      <AddForm
        onRequestClose={handleCloseTransaction}
        isOpen={isTransactionOpen}
      />
      <GlobalStyle />
    </TransactionsProvider>
  );
};
