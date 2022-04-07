import styled from "styled-components";
import { useTranslation } from "react-i18next";
import ProductTiles from "./components/ProductTiles";
import "./translations/i18n";

const AppContainer = styled.div`
  max-width: 120rem;
  margin: auto;
`;

function App() {
  const { t } = useTranslation();

  return (
    <AppContainer>
      <ProductTiles />
    </AppContainer>
  );
}

export default App;
