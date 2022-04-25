import { rest } from 'msw';
import { render, screen } from '../../test-utils';
import { registerIcons } from '../../registerIcons';
import { server } from '../../mocks/server';
import { API_GET_PRODUCTS } from '../../constants/api';
import { mockProductsResponse } from '../../mocks/mockProductResponse';
import { ProductTiles } from './ProductTiles';

test('renders a list with the correct number of product tiles', async () => {
  registerIcons();
  const numberOfMockTiles = mockProductsResponse.products.length;
  render(<ProductTiles />);
  const productTiles = await screen.findByTestId('product-tiles-container');
  expect(productTiles).toBeInTheDocument();

  const tiles = await screen.findAllByTestId('product-tile');
  expect(tiles).toHaveLength(numberOfMockTiles);
});

test('renders a list of tiles with correct properties', async () => {
  registerIcons();
  const numberOfMockTiles = mockProductsResponse.products.length;
  render(<ProductTiles />);

  const productTiles = await screen.findAllByTestId('product-tile');
  const firstTileName = await screen.findByText(
    `${mockProductsResponse.products[0]._source.name}`
  );
  const secondTileName = await screen.findByText(
    `${mockProductsResponse.products[1]._source.name}`
  );
  const tilePrices = await screen.findAllByText(/£/);
  const tileImages = await screen.findAllByRole('img');
  const tileButtons = await screen.findAllByRole('button', {
    name: /add to cart/i,
  });

  expect(productTiles).toHaveLength(numberOfMockTiles);
  expect(firstTileName).toBeInTheDocument();
  expect(secondTileName).toBeInTheDocument();
  expect(tilePrices).toHaveLength(numberOfMockTiles);
  expect(tileImages).toHaveLength(numberOfMockTiles);
  expect(tileButtons).toHaveLength(numberOfMockTiles);
});

test("Renders alert component with correct text when there's an error", async () => {
  server.resetHandlers(
    rest.get(`${API_GET_PRODUCTS}`, (req, res, ctx) => res(ctx.status(500)))
  );

  render(<ProductTiles />);
  const alert = await screen.findByTestId('product-tiles-alert');
  const errorMessage = await screen.findByText(
    'Request failed with status code 500'
  );

  expect(alert).toBeInTheDocument();
  expect(errorMessage).toBeInTheDocument();

  const tiles = screen.queryAllByTestId('product-tile');
  expect(tiles).toEqual([]);
});

test('renders a loading spinner only while product request is made', async () => {
  const numberOfMockTiles = mockProductsResponse.products.length;
  registerIcons();

  render(<ProductTiles />);

  const spinner = screen.getByTestId('product-tiles-spinner');
  expect(spinner).toBeInTheDocument();

  const tiles = await screen.findAllByTestId('product-tile');
  expect(tiles).toHaveLength(numberOfMockTiles);

  expect(spinner).not.toBeInTheDocument();
});
