import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
 :root{
    --primary-fontcolor: #FAF9F6;
    }
  *,
  *::before,
  *::after {
    box-sizing: border-box;
  }

  body {
    margin: 0;
    font-family: system-ui;
    background: rgb(34,0,36);
    background: linear-gradient(51deg, rgba(34,0,36,1) 75%, rgba(188,0,255,1) 100%);
   
    
  }
`;
