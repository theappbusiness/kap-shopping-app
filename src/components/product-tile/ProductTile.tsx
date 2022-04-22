import styled from 'styled-components';
import { Product } from '../../types/product';
import { Button } from '../general/button';

const ProductTileContainer = styled.li`
  margin: 0 auto 0 auto;
  width: max(
    115px,
    calc(
      calc(100vw / var(--grid-factor)) -
        calc(
          ${({ theme }) => theme.sizes.spacing.xxl} +
            ${({ theme }) => theme.sizes.spacing.xxl} +
            ${({ theme }) => theme.sizes.spacing.xl}
        )
    )
  );
  display: grid;
  grid-template-rows:
    max(
      115px,
      calc(
        calc(100vw / var(--grid-factor)) -
          calc(
            ${({ theme }) => theme.sizes.spacing.xxl} +
              ${({ theme }) => theme.sizes.spacing.xxl} +
              ${({ theme }) => theme.sizes.spacing.xl}
          )
      )
    )
    1fr 35px;

  & .product-tile-img {
    width: 100%;
    height: auto;
  }

  & .product-tile-title {
    font-size: ${({ theme }) => theme.sizes.fonts.lg};
    font-weight: 300;
    margin-top: ${({ theme }) => theme.sizes.spacing.md};
  }

  & .product-tile-price {
    font-size: ${({ theme }) => theme.sizes.fonts.sm};
    font-weight: 300;
    margin-bottom: ${({ theme }) => theme.sizes.spacing.md};
  }
`;

const ProductTile = ({ product }: { product: Product }) => {
  // TODO: Add translations and currency formatting

  const handleClick = () => {
    // TODO: Add to cart
  };

  return (
    <ProductTileContainer data-testid="product-tile">
      {/* TODO: Add src when source image is available */}
      <img
        className="product-tile-img"
        src={`https://picsum.photos/seed/${product.name}/270`}
        alt={product.name as string}
      />
      <div>
        <h3 className="product-tile-title">{product.name}</h3>
        <h4 className="product-tile-price">£{product.price}</h4>
      </div>
      <Button
        handleClick={handleClick}
        text="Add to cart"
        iconName="shopping-bag"
      />
    </ProductTileContainer>
  );
};

export default ProductTile;
