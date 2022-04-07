import { render, screen } from "@testing-library/react";
import ProductTiles from "./ProductTiles";

// TODO: Add tests
// Does it render a list of product tiles?
// Does it render the correct number of tiles?
// Does it render the an alert component with the correct text if there is an error?
// Does it render a loading spinner while the list of products is being fetched?

test("renders a list of product tiles", async () => {
  render(<ProductTiles />);
  const productTiles = await screen.findByTestId("product-tiles-container");
  expect(productTiles).toBeInTheDocument();
});
