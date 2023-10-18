import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
    html {
        box-sizing: border-box;
        overflow-y: scroll;
     }
  
  *, ::after, ::before {
    box-sizing: inherit;
  }

  body {
    color: ${({ theme }) => theme.colors.fontMain};
    font-family: 'Poppins', sans-serif;
    background-color: ${({ theme }) => theme.colors.backgroundMain};
    font-weight: 400;
    letter-spacing: 0.125rem;
  }
  
  h1,h2,h3,h4 {
    font-weight: 700;
    text-transform: uppercase;
    letter-spacing: 0.050rem;
  }

  `;
