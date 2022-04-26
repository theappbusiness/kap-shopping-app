import { render, screen } from '../../../test-utils';
import { Product } from '../../../types/product';
import { ProductPrice } from './ProductPrice';
const productDataMock: Product = {
  id: '#1',
  name: 'Some random product',
  category: {
    name: 'General',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. ',
  },
  price: 17999.9,
  stock: 5,
  description:
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. ',
};

test('when locale set to British English, price is formatted to £', () => {
  const formattedPrice = productDataMock.price.toLocaleString('en-GB', {
    style: 'currency',
    currency: 'GBP',
    minimumFractionDigits: 2,
  });
  render(<ProductPrice price={productDataMock.price} locale="en" />);
  const productPrice = screen.getByText(formattedPrice);
  expect(productPrice).toBeInTheDocument();
});

test('when locale set to Portuguese, price is formatted to €', () => {
  const formattedPrice = productDataMock.price.toLocaleString('pt', {
    style: 'currency',
    currency: 'EUR',
    minimumFractionDigits: 2,
  });

  render(<ProductPrice price={productDataMock.price} locale="pt" />);
  const productPrice = screen.getByText(formattedPrice.normalize('NFKC'));
  expect(productPrice).toBeInTheDocument();
});

test('when locale set to French, price is formatted to €', () => {
  const formattedPrice = productDataMock.price.toLocaleString('fr', {
    style: 'currency',
    currency: 'EUR',
    minimumFractionDigits: 2,
  });

  render(<ProductPrice price={productDataMock.price} locale="fr" />);
  const productPrice = screen.getByText(formattedPrice.normalize('NFKC'));
  expect(productPrice).toBeInTheDocument();
});
