import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
 :root{
    --font-size-base: 16px;
    --font-size-small: 0.875rem; /* 14px */
    --font-size-medium: 1rem; /* 16px */
    --font-size-large: 1.25rem; /* 20px */
    --font-size-xlarge: 2rem; /* 32px */
    --font-size-xxlarge: 3rem; /* 48px */
    --primary-fontcolor: #FAF9F6;
    }
  *
  *::before,
  *::after {
    box-sizing: border-box;
  }

  body {
    margin: 0;
    font-family: system-ui;
    background: rgb(34,0,36);
    background: linear-gradient(51deg, rgba(34,0,36,1) 75%, rgba(188,0,255,1) 100%);
    color: var(--primary-fontcolor);
    font-size: var(--font-size-base);
   
    
  }
`;
