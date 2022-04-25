import styled from 'styled-components';
import { Header } from './components/header/Header';
import { ProductTiles } from './components/product-tiles/ProductTiles';
import { Footer } from './components/footer/Footer';
import { AppRoutes } from './components/routes/AppRoutes';
import { registerIcons } from './registerIcons';
registerIcons();

const AppContainer = styled.div`
  min-height: 100vh;
  display: flex;
  flex-direction: column;
`;

export const App: React.FC = () => {
  return (
    <AppContainer>
      <Header />
      <AppRoutes />
      <ProductTiles />
      <Footer />
    </AppContainer>
  );
};
