import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`

    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }
    html {
        @media (max-width: 1080px) {
            font-size: 93.75%;
        }
        @media (max-width: 720px) {
            font-size: 87.5%;
        }
    }
    body {
        background-color: var(--bg-color);
        -webkit-font-smoothing: antialiased;
        transition: background .3s;
    }
    
    body, input, text-area, button {
        font-family: "Poppins", sans-serif;
        font-weight: 400;
    }

    h1, h2, h3, h4, h5, h6, strong {
        font-weight: 600;
    }

    button {
        cursor: pointer;
    }

    [disable] {
        opacity: 0.6;
        cursor: not-allowed;
    }

    .modal-content {
        width: 100%;
        max-width: 576px;
        background: var(--bg-color);
        /* border: .1rem solid var(--text-title); */
        padding: 3rem;
        position: relative;
        border-radius: .5rem;
    }
    .modal-overlay {
        background: rgba(0,0,0,0.6);
        position: fixed;
        top: 0;
        bottom: 0;
        right: 0;
        left: 0;
        display: flex;
        align-items: center;
        justify-content: center;
    }

    .modal-close-btn {
        position: absolute;
        right: 1.5rem;
        top: 1.5rem;
        border: none;
        scale: 1.4;
        background: transparent;
        transition: .2s;

        &:hover {
        filter: invert(28%) sepia(45%) saturate(3648%) hue-rotate(330deg) brightness(91%) contrast(96%);
        }
    }
`;

export const LightMode = createGlobalStyle`
    :root {
        --bg-color: #f0f2f5;
        --red: #ff8398;
        --green: #33CC9c;
        --blue-light: #00eaf7ff;
        --blue: #003984ff;
        --text-title: #363f5f;
        --text-body: #969cb3;
        --box-color: #FFFFFF;
    }
`;
export const DarkMode = createGlobalStyle`
    :root {
        --bg-color: #111;
        --red: #ff8398;
        --green: #33cc95;
        --blue: #003984ff;
        --blue-light: #00eaf7ff;
        --text-title: #fff;
        --text-body: #d7d7d9;
        --box-color: #202020;
    }
`;
