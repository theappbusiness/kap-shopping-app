import { render, screen } from '../../test-utils';
import { Product } from '../../types/product';
import { ProductTile } from './ProductTile';

const productDataMock: Product = {
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

test('renders a product tile with an image, title, price and add to cart button', () => {
  const formattedPrice = productDataMock.price.toLocaleString('en-US', {
    style: 'currency',
    currency: 'USD',
    minimumFractionDigits: 2,
  });
  render(<ProductTile product={productDataMock} />);

  const productTile = screen.getByTestId('product-tile');
  const productImg = screen.getByAltText(productDataMock.name);
  const productName = screen.getByText(productDataMock.name);
  const productPrice = screen.getByText(formattedPrice);
  const addToCartButton = screen.getByRole('button', { name: /Add to cart/ });

  expect(productTile).toBeInTheDocument();
  expect(productImg).toBeInTheDocument();
  expect(productName).toBeInTheDocument();
  expect(productPrice).toBeInTheDocument();
  expect(addToCartButton).toBeInTheDocument();
});
