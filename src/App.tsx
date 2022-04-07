import styled from "styled-components";
import { useTranslation } from "react-i18next";
import "./translations/i18n";
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
  const { t } = useTranslation();

  return (
    <>
      <GlobalStyle />
      <AppContainer>
        <h1 className="title">{t("hello")}</h1>
        <ProductTiles />
      </AppContainer>
    </>
  );
}

export default App;
