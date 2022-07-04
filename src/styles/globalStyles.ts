import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    outline: 0;
    font-family: 'Poppins', sans-serif
  }

  body {
    -webkit-font-smoothing: antialiased;
    background: #171B31;
  }

  button, select {
    outline: none;
    border: none;
    cursor: pointer;
    background: none;
  }
  a {
    text-decoration: none;
    cursor: pointer;
    color: #111;
  }
  [disabled] {
    opacity: 0.6;
    cursor: not-allowed;
  }

`;
