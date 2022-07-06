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

  .react-modal-overlay {
    background: rgba(0, 0, 0, 0.1);
    position: fixed;
    top: 0;
    bottom: 0;
    right: 0;
    left: 0;

    display: flex;
    align-items: center;
    justify-content: center;

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
