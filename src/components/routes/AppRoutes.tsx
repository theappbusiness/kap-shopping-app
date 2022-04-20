import { BrowserRouter, Routes, Route } from 'react-router-dom';
import CartPage from '../../pages/cart'
import HomePage from '../../pages/home'
import PaymentPage from '../../pages/payment'
import ProductDetailsPage from '../../pages/productDetails'
import ProductsPage from '../../pages/products'


const AppRoutes = () => {
return (
    <BrowserRouter>
    <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/products" element={<ProductsPage />} />
        <Route path="/products/:id" element={<ProductDetailsPage />} />
        <Route path="/cart" element={<CartPage />} />
        <Route path="/payment" element={<PaymentPage />} />
      </Routes>
    </BrowserRouter>

    
      )
}


export default AppRoutes