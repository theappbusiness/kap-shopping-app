import { Key } from "react";
import styled from "styled-components";
import ProductTile from "../product-tile/ProductTile";
import Spinner from "../general/Spinner";
import { useProductsData } from "../useProductsData";
import Alert from "../general/Alert";

const ProductTilesContainer = styled.ul`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 1rem;
  padding: 2rem;

  @media (min-width: 600px) {
    grid-template-columns: repeat(3, 1fr);
  }

  @media (min-width: 800px) {
    grid-template-columns: repeat(4, 1fr);
  }

  @media (min-width: 1000px) {
    grid-template-columns: repeat(5, 1fr);
  }
`;

const ProductTiles = () => {
  const { products, error, loading } = useProductsData();

  if (loading) {
    return <Spinner />;
  } else if (error) {
    return <Alert>{error.message}</Alert>;
  } else {
    return (
      <ProductTilesContainer data-testid="product-tiles-container">
        {products.map((product) => (
          <ProductTile product={product} key={product.id as Key} />
        ))}
      </ProductTilesContainer>
    );
  }
};

export default ProductTiles;