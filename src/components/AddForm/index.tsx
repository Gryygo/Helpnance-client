import { FormEvent, useState } from "react";
import Modal from "react-modal";
import { FormContainer, TypeSubContainer, RadioBtn } from "./styles";
import closeIcon from "../../assets/close.svg";
import { GiReceiveMoney, GiPayMoney } from "react-icons/gi";
import { useTransactions } from "../../hooks/useTransactions";

interface AddFormProps {
  isOpen: boolean;
  onRequestClose: () => void;
}

export const AddForm = (props: AddFormProps) => {
  const { addTransaction } = useTransactions();

  const [title, setTitle] = useState("");
  const [value, setValue] = useState(0);
  const [category, setCategory] = useState("");
  const [type, setType] = useState("deposit");

  const handleNewTransaction = async (event: FormEvent) => {
    
    event.preventDefault();
    await addTransaction({ title, value, type, category });

    setTitle("");
    setValue(0);
    setCategory("");
    setType("deposit");

    props.onRequestClose();
  };

  return (
    <Modal
      overlayClassName="modal-overlay"
      className="modal-content"
      isOpen={props.isOpen}
      onRequestClose={props.onRequestClose}
    >
      <button
        className="modal-close-btn"
        type="button"
        onClick={props.onRequestClose}
      >
        <img src={closeIcon} alt="Close Form Icon" />
      </button>

      <FormContainer onSubmit={handleNewTransaction}>
        <h2>Add Transaction</h2>
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
        <button type="submit">Register</button>
      </FormContainer>
    </Modal>
  );
};
