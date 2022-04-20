import Header from './components/header/Header';
import ProductTiles from './components/product-tiles/ProductTiles';
import Footer from './components/footer/Footer';
import styled from 'styled-components';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import HomePage from './components/home/HomePage';
import ProductsPage from './components/productsPage/ProductsPage';
import ProductDetailsPage from './components/productDetails/ProductDetailsPage';
import CartPage from './components/cartPage/CartPage';
import PaymentPage from './components/paymentPage/PaymentPage';

const Container = styled.div`
  min-height: 100vh;
  display: flex;
  flex-direction: column;
`;

function App() {
  return (
    <BrowserRouter>
      <Container>
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
      </Container>
    </BrowserRouter>
  );
}

export default App;
