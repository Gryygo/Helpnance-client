import { SummaryContainer } from "./styles";
import { useTransactions } from "../../hooks/useTransactions";
import { LoadingSpin } from "../Loading";
import { GiMoneyStack, GiReceiveMoney, GiPayMoney } from "react-icons/gi";

export const Summary = () => {
  const { transactions, loading } = useTransactions();

  const summary = transactions.reduce(
    (acc, transaction) => {
      switch (transaction.type) {
        case "deposit":
          acc.totalDeposit += transaction.value;
          acc.total += transaction.value;
          break;
        case "withdraw":
          acc.totalWithdraw += transaction.value;
          acc.total -= transaction.value;
          break;
      }

      return acc;
    },
    {
      totalDeposit: 0,
      totalWithdraw: 0,
      total: 0,
    }
  );

  return (
    <SummaryContainer>
      <div className="income_div">
        <header>
          <p>Income</p>
          <GiReceiveMoney className="icon" />
        </header>
        {loading ? (
          <strong>
            {new Intl.NumberFormat("pt-BR", {
              style: "currency",
              currency: "BRL",
            }).format(summary.totalDeposit)}
          </strong>
        ) : (
          <LoadingSpin />
        )}
      </div>
      <div>
        <header>
          <p>Total</p>
          <GiMoneyStack className="icon" />
        </header>
        {loading ? (
          <strong>
            {new Intl.NumberFormat("pt-BR", {
              style: "currency",
              currency: "BRL",
            }).format(summary.total)}
          </strong>
        ) : (
          <LoadingSpin />
        )}
      </div>
      <div className="outcome_div">
        <header>
          <p>Outcome</p>
          <GiPayMoney className="icon" />
        </header>
        {loading ? (
          <strong>
            -
            {new Intl.NumberFormat("pt-BR", {
              style: "currency",
              currency: "BRL",
            }).format(summary.totalWithdraw)}
          </strong>
        ) : (
          <LoadingSpin />
        )}
      </div>
    </SummaryContainer>
  );
};
