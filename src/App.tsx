import Header from './components/header/Header';
import ProductTiles from './components/product-tiles/ProductTiles';
import Footer from './components/footer/Footer';
import styled from 'styled-components';
import HomePage from './pages/home';
import ProductsPage from './pages/products';
import ProductDetailsPage from './pages/productDetails';
import CartPage from './pages/cart';
import PaymentPage from './pages/payment';
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
      <AppRoutes/>
      <ProductTiles />
      <Footer />
    </AppContainer>
  );
}

export default App;
