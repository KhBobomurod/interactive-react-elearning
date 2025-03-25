// src/styles/GlobalStyle.js
import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
  body {
    background-color: #1b1b1b;
    font-family: 'SF Pro Display', sans-serif;
    color: #fff;
  }

  button {
    font-weight: bold;
    font-size: 1.1rem;
    cursor: pointer;
    padding: 1rem 2rem;
    background: transparent;
    border: 3px solid #30bee1;
    color: #fff;
    transition: all 0.25s linear;
    &:hover {
      background-color: #30bee1;
      color: #1b1b1b;
    }
  }

  h2 {
    font-weight: lighter;
    font-size: 4rem;
  }

  h3 {
    color: #fff;
  }

  h4 {
    font-weight: bold;
    font-size: 1.8rem;
  }

  span {
    color: #30bee1;
    font-weight: bold;
  }

  a {
    font-size: 1.1rem;
  }

  p {
    padding: 2rem 0rem;
    color: #ccc;
    font-size: 1.4rem;
    line-height: 150%;
  }

  @media (max-width: 1300px) {
    h2 {
      font-size: 3rem;
    }
    h3 {
      font-size: 1.5rem;
    }
    h4 {
      font-size: 1.6rem;
    }
    p {
      font-size: 1.2rem;
      padding: 1.5rem 0rem;
    }
    button {
      font-size: 1rem;
      padding: 0.8rem 1.5rem;
      border: 2px solid #30bee1;
    }
  }

  @media (max-width: 768px) {
    h2 {
      font-size: 2.5rem;
    }
    h3 {
      font-size: 1.3rem;
    }
    h4 {
      font-size: 1.4rem;
    }
    p {
      font-size: 1rem;
      padding: 1rem 0rem;
    }
    button {
      font-size: 0.9rem;
      padding: 0.7rem 1.2rem;
    }
  }

  @media (max-width: 480px) {
    h2 {
      font-size: 2rem;
    }
    h3 {
      font-size: 1.1rem;
    }
    h4 {
      font-size: 1.2rem;
    }
    p {
      font-size: 0.9rem;
      padding: 0.8rem 0rem;
    }
    button {
      font-size: 0.85rem;
      padding: 0.6rem 1rem;
      width: 100%;
    }
  }
`;

export default GlobalStyle;
