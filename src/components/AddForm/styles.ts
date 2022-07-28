import styled from "styled-components";
import { darken, transparentize } from "polished";

export const FormContainer = styled.form`
  h2 {
    color: var(--text-title);
    font-size: 1.5rem;
    margin-bottom: 2rem;
  }

  input {
    width: 100%;
    padding: 0 1.5rem;
    height: 4rem;
    color: var(--text-title);
    border-radius: 0.5rem;
    background-color: var(--box-color);
    border: none;
    font-weight: 400;
    font-size: 1rem;

    &::placeholder {
      color: var(--text-body);
    }

    & + input {
      margin-top: 1rem;
    }
  }

  button[type="submit"] {
    width: 100%;
    padding: 0 1.5rem;
    height: 4rem;
    color: var(--text-title);
    background-color: var(--green);
    border-radius: 0.5rem;
    border: none;
    font-size: 1rem;
    margin-top: 1.5rem;
    transition: 0.3s;
    font-weight: 600;

    &:hover {
      filter: brightness(0.9);
    }
  }
`;

export const TypeSubContainer = styled.div`
  margin: 1rem 0;
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 0.5rem;
`;

interface RadioBtnProps {
  isPressed: boolean;
  pressedColor: "green" | "red";
}

const colors = {
  green: "#33CC9c",
  red: "#ff8398",
};

export const RadioBtn = styled.button<RadioBtnProps>`
  background: ${(props) => (props.isPressed
                            ? transparentize(.1, colors[props.pressedColor] )
                            : "transparent")};
  border: 1px solid #d7d7dd;
  color: var(--text-title);
  border-radius: 0.5rem;
  height: 4rem;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: 0.2s;

  img {
    scale: 1.1;
  }
  span {
    display: inline-block;
    margin-right: 1rem;
    font-size: 1.2rem;
  }
  .icon {
    font-size: 2.3rem;
  }
`;
