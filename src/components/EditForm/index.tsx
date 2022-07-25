import { FormEvent, useState } from "react";
import Modal from "react-modal";
import { FormContainer, TypeSubContainer, RadioBtn } from "./styles";
import closeIcon from "../../assets/close.svg";
import { GiReceiveMoney, GiPayMoney } from "react-icons/gi";
import { useTransactions } from "../../hooks/useTransactions";

interface EditFormProps {
  isOpen: boolean;
  onRequestClose: () => void;
  transaction: TransactionProps;
}

interface TransactionProps {
  _id: number;
  title: string;
  value: number;
  type: string;
  category: string;
  createdAt: string;
}

export const EditForm = ({
  isOpen,
  onRequestClose,
  transaction,
}: EditFormProps) => {
  const { updtTransaction } = useTransactions();

  const [title, setTitle] = useState(transaction.title);
  const [value, setValue] = useState(transaction.value);
  const [category, setCategory] = useState(transaction.category);
  const [type, setType] = useState(transaction.type);

  const handleUpdtTransaction = async (
    event: FormEvent<HTMLFormElement>,
    transaction: TransactionProps
  ) => {
    event.preventDefault();
    await updtTransaction({ title, value, type, category }, transaction);
    onRequestClose();
  };

  return (
    <Modal
      overlayClassName="modal-overlay"
      className="modal-content"
      isOpen={isOpen}
      onRequestClose={onRequestClose}
    >
      <button
        className="modal-close-btn"
        type="button"
        onClick={onRequestClose}
      >
        <img src={closeIcon} alt="Close Form Icon" />
      </button>

      <FormContainer onSubmit={(e) => handleUpdtTransaction(e, transaction)}>
        <h2>Update Transaction</h2>
        <input
          value={title}
          onChange={(event) => setTitle(event.target.value)}
          type="text"
          placeholder="Add Title"
        />
        <input
          value={value}
          onChange={(event) => setValue(+event.target.value)}
          type="number"
          placeholder="Add Value"
        />
        <TypeSubContainer>
          <RadioBtn
            isPressed={type === "deposit"}
            pressedColor="green"
            type="button"
            onClick={() => setType("deposit")}
          >
            <span>Deposit </span>
            <GiReceiveMoney className="icon"/>
          </RadioBtn>
          <RadioBtn
            isPressed={type === "withdraw"}
            pressedColor="red"
            type="button"
            onClick={() => setType("withdraw")}
          >
            <span>Withdraw </span>
            <GiPayMoney className="icon"/>
          </RadioBtn>
        </TypeSubContainer>
        <input
          value={category}
          onChange={(event) => setCategory(event.target.value)}
          type="text"
          placeholder="Add Category"
        />
        <button type="submit">Update</button>
      </FormContainer>
    </Modal>
  );
};
