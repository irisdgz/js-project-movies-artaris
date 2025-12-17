import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  /* Import font */
  @import url("https://fonts.googleapis.com/css2?family=Montserrat:wght@400;600;700&display=swap");

  :root {
    --color-black: #0b0b0b;
    --color-white: #ffffff;
    --color-gray: #cccccc;
    --color-error: #ff4d4d;
  }

  /* Reset */
  *,
  *::before,
  *::after {
    box-sizing: border-box;
  }

  body {
    margin: 0;
    font-family: "Montserrat", system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif;
    background-color: var(--color-black);
    color: var(--color-white);
  }

  a {
    color: inherit;
    text-decoration: none;
  }

  img {
    max-width: 100%;
    display: block;
  }

  button {
    font-family: inherit;
    cursor: pointer;
  }
`;

export default GlobalStyle;
