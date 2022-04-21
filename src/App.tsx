import styled from 'styled-components';
import Header from './components/header/Header';
import ProductTiles from './components/product-tiles/ProductTiles';
import Footer from './components/footer/Footer';
import AppRoutes from './components/routes/AppRoutes';


const AppContainer = styled.div`
  min-height: 100vh;
  display: flex;
  flex-direction: column;
`;

function App() {
  return (
      <AppContainer>
        <Header />
        <AppRoutes />
        <ProductTiles />
        <Footer />
      </AppContainer>
  );
}

export default App;
