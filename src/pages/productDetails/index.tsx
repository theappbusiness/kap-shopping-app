import { ReactElement } from 'react';
import { ProductDetails } from '../../components/product-details';

const mockProduct = {
  id: '#1',
  name: 'Some random product',
  category: {
    name: 'General',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. ',
  },
  price: 179.9,
  stock: 5,
  description:
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. ',
};

export const ProductDetailsPage = (): ReactElement => {
  return (
    <div>
      Product Details Page
      <ProductDetails product={mockProduct} />
    </div>
  );
};
