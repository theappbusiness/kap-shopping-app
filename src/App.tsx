import Header from './components/header/Header';
import ProductTiles from './components/product-tiles/ProductTiles';
import Footer from './components/footer/Footer';
import styled from 'styled-components';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import HomePage from './pages/home';
import ProductsPage from './pages/products';
import ProductDetailsPage from './pages/productDetails';
import CartPage from './pages/cart';
import PaymentPage from './pages/payment';

const AppContainer = styled.div`
  min-height: 100vh;
  display: flex;
  flex-direction: column;
`;

function App() {
  return (
    <AppContainer>
      <Header />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/products" element={<ProductsPage />} />
        <Route path="/products/:id" element={<ProductDetailsPage />} />
        <Route path="/cart" element={<CartPage />} />
        <Route path="/payment" element={<PaymentPage />} />
      </Routes>
      <ProductTiles />
      <Footer />
    </AppContainer>
  );
}

export default App;
