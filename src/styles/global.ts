import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  :root {
    font-size: 60%;

    --color-background: #6842C2;
    --color-background-secondary: #F0F0F7;
    --green: #33CC95;
    --white: #FFFFFF;
  }

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  html, body, #root {
    height: 100vh;
  }

  body {
    background: var(--color-background);
  }

  #root {
    display: flex;
    align-items: center;
    justify-content: center;
  }

  body,
  input,
  button,
  span,
  textarea {
    font: 500 1.6rem sans-serif;
    color: var(--color-text-base);
  }

  button, input[type="checkbox"] {
    cursor: pointer;
  }


  @media (min-width: 700px) {
    :root {
      font-size: 62.5%;
    }
  }
`;
