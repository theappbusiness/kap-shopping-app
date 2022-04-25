import { Key, ReactElement } from 'react';
import styled from 'styled-components';
import { ProductTile } from '../product-tile/ProductTile';
import { Spinner } from '../general/Spinner';
import { useProductsData } from '../useProductsData';
import { Alert } from '../general/Alert';

const ProductTilesContainer = styled.ul`
  display: grid;
  grid-template-columns: repeat(var(--grid-factor), 1fr);
  gap: ${({ theme }) => theme.sizes.spacing.xl};
  padding: ${({ theme }) => theme.sizes.spacing.xxl};
`;

export const ProductTiles = (): ReactElement => {
  const { products, error, loading } = useProductsData();

  if (loading) {
    return <Spinner />;
  } else if (error) {
    return <Alert color="warning">{error.message}</Alert>;
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
