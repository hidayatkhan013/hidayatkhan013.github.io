import { createGlobalStyle } from "styled-components";
import variables from "./Variables";

const GlobalStyle = createGlobalStyle`
    ${variables};

    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    html {
        font-size: 62.5%;
        scroll-behavior: smooth;
    }

    body {
        background: radial-gradient(circle at top left, rgba(158, 192, 255, 0.08), transparent 30%), var(--fond-gradient);
        color: var(--light-text);
        font: normal 1.6rem/100% var(--font-sans);
        max-width: 100vw;
        overflow-x: hidden;
    }

    ::-webkit-scrollbar {
        background-color: transparent;
        width: 10px;
    }

    ::-webkit-scrollbar-track {
        background-color: transparent;
    }

    ::-webkit-scrollbar-thumb {
        background: rgba(148, 163, 184, 0.4);
        border-radius: 999px;
    }

    ::-webkit-scrollbar-thumb:hover {
        background: rgba(148, 163, 184, 0.6);
    }

    #root {
        background: transparent;
        min-height: 100vh;
        overflow: hidden;
    }

    :focus {
        outline: none;
        border: none;
    }

    [id] {
        scroll-margin-top: 80px;
    }
`;

export default GlobalStyle;
