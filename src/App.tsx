import Header from './components/header/Header';
import ProductTiles from './components/product-tiles/ProductTiles';
import Footer from './components/footer/Footer';
import styled from 'styled-components';
import AppRoutes from './components/routes/AppRoutes';
import { BrowserRouter } from 'react-router-dom';

const AppContainer = styled.div`
  min-height: 100vh;
  display: flex;
  flex-direction: column;
`;

function App() {
  return (
    <BrowserRouter>
      <AppContainer>
        <Header />
        <AppRoutes />
        <ProductTiles />
        <Footer />
      </AppContainer>
    </BrowserRouter>
  );
}

export default App;
