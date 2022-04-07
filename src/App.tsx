import styled from "styled-components";
import GlobalStyle from "./GlobalStyle";
import ProductTiles from "./components/product-tiles/ProductTiles";

const AppContainer = styled.div`
  max-width: 120rem;
  margin: auto;

  & .title {
    font-size: 3rem;
    text-align: center;
  }
`;

function App() {
  return (
    <>
      <GlobalStyle />
      <AppContainer>
        <ProductTiles />
      </AppContainer>
    </>
  );
}

export default App;
