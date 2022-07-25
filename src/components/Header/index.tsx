import logo from "../../assets/logo.svg";
import { ContentContainer, HeadContainer } from "./styles";

interface HeaderProps {
  onOpenTransaction: () => void;
}

export const Header = (props: HeaderProps) => {
  return (
    <HeadContainer>
      <ContentContainer>
        <img src={logo} alt="financial  helper" />
        <button onClick={props.onOpenTransaction} type="button">
          Add Transaction
        </button>
      </ContentContainer>
    </HeadContainer>
  );
};
