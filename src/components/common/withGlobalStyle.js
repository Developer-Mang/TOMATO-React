import React from "react";
import { createGlobalStyle } from "styled-components";

const GlobalStyleWrap = createGlobalStyle`
  html {
  font-family: 'Noto Sans KR', sans-serif;
  font-size: 10px;
  line-height: 1.5;
  letter-spacing: -0.0025em;
  color: #707070;
}
body * {
  box-sizing: border-box;
}
*:focus {
  outline: none;
  box-shadow: 0 0 3px rgba(255,85, 31, .5);
}
body {
  margin: 0;
  padding: 0;
  font-size: 1.4rem;
  line-height: 1.5;
}

/* reset */
h1, h2, h3, h4, h5, h6, p, ul, ol, dl, dt, dd {
  margin: 0;
  padding: 0;
}
h1, h2, h3, h4, h5, h6 {
  color: #202020;
  font-weight: 500;
}
ul, ol {list-style: none;}
button {
  padding: 0;
  border: none;
  background: none;
  cursor: pointer;
}
a {
  text-decoration: none;
  color: inherit;
}
img {vertical-align: top;}
`;

const GlobalStyle = ({ children }) => {
  return <GlobalStyleWrap>{children}</GlobalStyleWrap>;
};

export default GlobalStyle;
