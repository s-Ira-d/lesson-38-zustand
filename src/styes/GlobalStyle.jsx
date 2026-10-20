import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  * {
    box-sizing: border-box;
  }

  body {
    margin: 0;
    background: #f8f3ec;
    color: #514136;
    font-family: "Luxurious Roman", serif;
    font-size: 16px;
    line-height: 1.5;
  }

  h1, h2, h3, h4, h5, h6 {
    font-family: "Aref Ruqaa", serif;
    color: #4b3428;
  }

  h1 {
    margin: 0 0 30px;
    text-align: center;
    font-size: 42px;
    letter-spacing: 0.5px;
  }

  input, select, button {
    font: inherit;
  }

  input, select {
    padding: 11px 13px;
    border: 1px solid #e4d6c8;
    border-radius: 10px;
    background: #fffdf9;
    color: #514136;
    outline: none;
    transition: border-color 0.2s, box-shadow 0.2s;
  }

  input:focus, select:focus {
    border-color: #ad896c;
    box-shadow: 0 0 0 3px rgba(173, 137, 108, 0.12);
  }

  button {
    padding: 11px 17px;
    border: none;
    border-radius: 10px;
    background: #87664e;
    color: #fffaf4;
    cursor: pointer;
    transition: background 0.2s, transform 0.2s;
  }

  button:hover {
    background: #6f503b;
  }

  button:active {
    transform: scale(0.98);
  }

  img {
    max-width: 100%;
  }
`;
