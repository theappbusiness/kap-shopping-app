import { render, screen } from '../../test-utils';
import ProductTile from './ProductTile';
import { Product } from '../../types/product';

const productDataMock: Product = {
  id: '#1',
  name: 'Some random product',
  category: {
    name: 'General',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. ',
  },
  price: 179.99,
  stock: 5,
  description:
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. ',
};

test('renders a product tile with an image, title, price and add to cart button', () => {
  render(<ProductTile product={productDataMock} />);
  const productTile = screen.getByTestId('product-tile');
  const productImg = screen.getByAltText(productDataMock.name);
  const productName = screen.getByText(productDataMock.name);
  const productPrice = screen.getByText(`£${productDataMock.price}`);
  const addToCartButton = screen.getByRole('button', { name: /Add to cart/ });

  expect(productTile).toBeInTheDocument();
  expect(productImg).toBeInTheDocument();
  expect(productName).toBeInTheDocument();
  expect(productPrice).toBeInTheDocument();
  expect(addToCartButton).toBeInTheDocument();
});
