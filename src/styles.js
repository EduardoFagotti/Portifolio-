import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
    body{
        padding: 0;
        margin: 0;
        font-family: 'Roboto', sans-serif;
        background-color: #121214;
    }
    *{
        box-sizing: border-box;
    }
`;

export default GlobalStyle;
