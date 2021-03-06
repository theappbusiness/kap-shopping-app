import { Key } from 'react';
import styled from 'styled-components';
import { ProductTile } from '../product-tile/ProductTile';
import { Spinner } from '../general/Spinner';
import { useProductsData } from '../useProductsData';
import { Alert } from '../general/Alert';

const ProductTilesContainer = styled.ul`
  display: grid;
  grid-template-columns: repeat(var(--grid-factor), 1fr);
  gap: calc(
    (
        ${({ theme }) => theme.sizes.spacing.md} +
          ${({ theme }) => theme.sizes.spacing.lg}
      ) / 2
  );
  padding: ${({ theme }) => theme.sizes.spacing.xxl} 0;
  margin: 0 auto;
`;

export const ProductTiles: React.FC = () => {
  const { products, error, loading } = useProductsData();

  if (loading) {
    return <Spinner data-testid="product-tiles-spinner" />;
  } else if (error) {
    return (
      <Alert color="warning" data-testid="product-tiles-alert">
        {error.message}
      </Alert>
    );
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
