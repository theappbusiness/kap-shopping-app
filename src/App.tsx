import styled from "styled-components";
import ProductTiles from "./components/ProductTiles";

const AppContainer = styled.div`
  max-width: 120rem;
  margin: auto;
`;

function App() {
  return (
    <AppContainer>
      <ProductTiles />
    </AppContainer>
  );
}

export default App;
