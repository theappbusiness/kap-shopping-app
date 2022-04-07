import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  * {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
  font-size: 62.5%;
  font-family: "Open Sans", sans-serif;
}

ul {
  list-style: none;
}
`;

export default GlobalStyle;
