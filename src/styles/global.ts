import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  * {
    padding: 0;
    margin: 0;
    box-sizing: border-box;
  }

  html {
    @media screen and (max-width: 1080px) {
      font-size: 93.75%;
    }
    @media screen and (max-width: 720px) {
      font-size: 87.5%;
    }
  }

  body {
    color: #FEFEFE;
    background-color: #2D2F33;
  }

  body, input, textarea, select, button {
    font: 400 1rem "Dm Sans", sans-serif;
  }

  button {
    cursor: pointer;
  }

  a {
    color: inherit;
    text-decoration: none;
  }

  body::-webkit-scrollbar-track
  {
    -webkit-box-shadow: inset 0 0 6px rgba(0,0,0,0.3);
    border-radius: 10px;
    background-color: transparent;
  }

  body::-webkit-scrollbar
  {
    width: 8px;
    background-color: transparent;
  }

  body::-webkit-scrollbar-thumb
  {
    border-radius: 10px;
    -webkit-box-shadow: inset 0 0 6px rgba(0,0,0,.3);
    background-color: #888;
  }
`;