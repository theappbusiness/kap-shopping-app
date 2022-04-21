import { render, screen } from '../../test-utils';
import ProductTiles from './ProductTiles';

// TODO: Add tests
// Does it render a list of tiles with the correct properties?
// Does it render the an alert component with the correct text if there is an error?
// Does it render a loading spinner while the list of products is being fetched?

test('renders a list with the corrent number of product tiles', async () => {
  render(<ProductTiles />);
  const productTiles = await screen.findByTestId('product-tiles-container');
  expect(productTiles).toBeInTheDocument();

  const tiles = await screen.findAllByTestId('product-tile');
  expect(tiles).toHaveLength(2);
});


