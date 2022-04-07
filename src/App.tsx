import styled from "styled-components";
import GlobalStyle from "./GlobalStyle";
import ProductTiles from "./components/product-tiles/ProductTiles";

const AppContainer = styled.div`
  max-width: 120rem;
  margin: auto;
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
