import { Routes as ReactRouterRoutes, Route } from 'react-router-dom';
import { useAuth0 } from '@auth0/auth0-react';
import { DefaultLayout } from './layouts/Default';
import CartPage from './pages/cart';
import { HomePage } from './pages/home';
import PaymentPage from './pages/payment';
import ProductDetailsPage from './pages/productDetails';
import ProductsPage from './pages/products';
import Spinner from './components/general/Spinner';
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
  const { isLoading } = useAuth0();

  if (isLoading) {
    return <Spinner />;
  }

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
