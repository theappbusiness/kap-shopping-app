import { Routes as ReactRouterRoutes, Route } from 'react-router-dom';
import { DefaultLayout } from './layouts/Default';
import CartPage from './pages/cart';
import { HomePage } from './pages/home';
import PaymentPage from './pages/payment';
import ProductDetailsPage from './pages/productDetails';
import ProductsPage from './pages/products';
import { ProtectedPage } from './pages/protected';

interface IRoute {
  path: string;
  Component: React.FC;
  Layout?: React.FC;
}

const routes: IRoute[] = [
  {
    path: '/',
    Component: HomePage,
    Layout: DefaultLayout,
  },
  {
    path: '/products',
    Component: ProductsPage,
    Layout: DefaultLayout,
  },
  {
    path: '/products/:id',
    Component: ProductDetailsPage,
    Layout: DefaultLayout,
  },
  {
    path: '/cart',
    Component: CartPage,
    Layout: DefaultLayout,
  },
  {
    path: '/payment',
    Component: PaymentPage,
    Layout: DefaultLayout,
  },
  {
    path: '/protected',
    Component: ProtectedPage,
    Layout: DefaultLayout,
  },
];

export const Routes: React.FC = () => {
  return (
    <ReactRouterRoutes>
      {routes.map(({ path, Component, Layout = () => <></> }) => (
        <Route
          key={path}
          path={path}
          element={
            <Layout>
              <Component />
            </Layout>
          }
        />
      ))}
    </ReactRouterRoutes>
  );
};
