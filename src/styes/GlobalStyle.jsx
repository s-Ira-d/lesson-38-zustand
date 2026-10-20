import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  :root {
    font-family: "Inter", "Segoe UI", sans-serif;
    color: #253d35;
    background: #f5f6f0;

    --color-primary: #286653;
    --color-primary-dark: #1d4c3e;
    --color-text: #253d35;
    --color-muted: #7b8981;
    --color-border: #e2e8df;
    --color-surface: #ffffff;
    --color-background: #f5f6f0;
    --radius-card: 18px;
    --shadow-card: 0 5px 20px rgba(35, 65, 48, 0.045);
  }

  * {
    box-sizing: border-box;
  }

  body {
    margin: 0;
    min-width: 320px;
    background: var(--color-background);
    color: var(--color-text);
    font-size: 15px;
    line-height: 1.6;
  }

  h1, h2, h3, p {
    margin-top: 0;
  }

  h1, h2, h3 {
    letter-spacing: -0.035em;
  }

  h1 {
    margin-bottom: 28px;
    font-size: clamp(30px, 4vw, 42px);
    font-weight: 750;
    text-align: left;
  }

  h2 {
    margin-bottom: 16px;
    font-size: 23px;
  }

  input, select, button {
    font: inherit;
  }

  input, select {
    width: 100%;
    min-width: 0;
    padding: 11px 13px;
    color: var(--color-text);
    background: #fff;
    border: 1px solid var(--color-border);
    border-radius: 10px;
    outline: none;
    transition: border-color 0.2s, box-shadow 0.2s;
  }

  input::placeholder {
    color: #a0aaa3;
  }

  input:focus, select:focus {
    border-color: var(--color-primary);
    box-shadow: 0 0 0 3px rgba(40, 102, 83, 0.11);
  }

  button {
    padding: 11px 17px;
    color: #fff;
    background: var(--color-primary);
    border: 1px solid var(--color-primary);
    border-radius: 10px;
    font-weight: 600;
    cursor: pointer;
    transition: background 0.2s, transform 0.2s;
  }

  button:hover {
    background: var(--color-primary-dark);
  }

  button:active {
    transform: scale(0.98);
  }

  button:focus-visible {
    outline: 3px solid rgba(40, 102, 83, 0.25);
    outline-offset: 2px;
  }

  img {
    display: block;
    max-width: 100%;
  }

  @media (prefers-reduced-motion: reduce) {
    *, *::before, *::after {
      scroll-behavior: auto !important;
      transition-duration: 0.01ms !important;
      animation-duration: 0.01ms !important;
    }
  }
`;
