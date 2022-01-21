import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
    * {
        box-sizing: border-box;
        font-family: 'Temes New Roman', cursive;
    }
    div {
        background: lightskyblue;
        width: 400px;
        margin: 20px 20px;
    }
`;