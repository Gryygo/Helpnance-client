import logo from "../../assets/logo.svg";
import { ContentContainer, HeadContainer } from "./styles";
import { BsFillSunFill, BsFillMoonStarsFill } from "react-icons/bs";
import { useTransactions } from "../../hooks/useTransactions";

interface HeaderProps {
  onOpenTransaction: () => void;
}

export const Header = (props: HeaderProps) => {
  const { isDark, setIsDark } = useTransactions();

  const handleDarkMode = () => {
    return !isDark ? setIsDark(true) : setIsDark(false);
  };

  return (
    <HeadContainer>
      <ContentContainer>
        <img src={logo} alt="financial  helper" />
        <button className="theme_toggle" onClick={handleDarkMode}>
          {isDark 
            ? <BsFillMoonStarsFill className="theme_icon" />
            : <BsFillSunFill className="theme_icon" />
          }
        </button>
        <button onClick={props.onOpenTransaction} type="button">
          Add Transaction
        </button>
      </ContentContainer>
    </HeadContainer>
  );
};
