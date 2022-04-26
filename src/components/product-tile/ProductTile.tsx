import styled from 'styled-components';
import { Product } from '../../types/product';
import { Button } from '../general/button';
import { userLocale } from '../../translations/userLocale';
import { ProductPrice } from './product-price/ProductPrice';

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
`;

export const ProductTile: React.FC<{ product: Product }> = ({ product }) => {
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
        <ProductPrice price={product.price} locale={userLocale}></ProductPrice>
      </div>
      <Button handleClick={handleClick} iconName="shopping-bag">
        Add to cart
      </Button>
    </ProductTileContainer>
  );
};
