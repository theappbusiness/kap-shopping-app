import { render, screen } from '../../test-utils';
import { registerIcons } from '../../registerIcons';
import { Product } from '../../types/product';
import { ProductDetails } from '.';

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

test('Page renders the correct product with an image, title, price, description and add to cart button', () => {
  registerIcons();
  const formattedPrice = productDataMock.price.toLocaleString('en-US', {
    style: 'currency',
    currency: 'USD',
  });
  render(<ProductDetails product={productDataMock} />);
  const productImage = screen.getByRole('img', {
    name: productDataMock.name,
  });
  const productTitle = screen.getByText(productDataMock.name);
  const productPrice = screen.getByText(formattedPrice);
  const productDescription = screen.getByTestId('product-details-description');
  const productButton = screen.getByRole('button', {
    name: /add to cart/i,
  });

  expect(productImage).toBeInTheDocument();
  expect(productTitle).toBeInTheDocument();
  expect(productPrice).toBeInTheDocument();
  expect(productDescription).toBeInTheDocument();
  expect(productButton).toBeInTheDocument();
});
