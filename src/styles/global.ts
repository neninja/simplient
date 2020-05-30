import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  * {
    font-family: sans-serif;
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    outline: 0;
  }

  body {
    background: #282c34;
  }

  button {
    cursor: pointer;
  }
`;
