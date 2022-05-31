import { useTranslation } from 'react-i18next';
import styled from 'styled-components';
import { useContext } from 'react';
import { Product } from '../../types/product';
import '../../translations/i18n';
import { Button } from '../general/button';
import { userLocale } from '../../translations/userLocale';
import { CartContext } from '../../contexts/Cart';
import { ReactComponent as Like } from '../../assets/icons/like.svg';
import { ReactComponent as Cart } from '../../assets/icons/cart.svg';
import { IconButton } from '../general/icon-button';
import { ProductPrice } from './product-price/ProductPrice';

const ProductTileContainer = styled.li`
  background-color: ${({ theme }) => theme.colors.Neutral10};
  border: 1px solid ${({ theme }) => theme.colors.Grey70};
  border-radius: 4px;
  margin: 0 auto 0 auto;
  padding: calc(
    (
        ${({ theme }) => theme.sizes.spacing.md} +
          ${({ theme }) => theme.sizes.spacing.lg}
      ) / 2
  );
  width: max(
    115px,
    calc(
      calc(100vw / var(--grid-factor)) -
        calc(
          ${({ theme }) => theme.sizes.spacing.lg} +
            ${({ theme }) => theme.sizes.spacing.lg} +
            ${({ theme }) => theme.sizes.spacing.sm}
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
            ${({ theme }) => theme.sizes.spacing.lg} +
              ${({ theme }) => theme.sizes.spacing.lg} +
              ${({ theme }) => theme.sizes.spacing.lg}
          )
      )
    )
    1fr 35px;

  & .product-tile-img {
    width: 100%;
    height: auto;
  }

  .product-tile-like-row {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    align-items: start;
    min-width: 0;
  }

  .product-tile-like-row div {
    width: 36px;
  }

  .product-tile-title {
    font-size: ${({ theme }) => theme.sizes.fonts.xxl};
    font-weight: 300;
    line-height: ${({ theme }) => theme.sizes.spacing.xl};
  }

  .like-button {
    margin-top: -${({ theme }) => theme.sizes.spacing.sm};
    margin-left: -${({ theme }) => theme.sizes.spacing.sm};
  }

  .like-button path {
    fill: none;
  }

  p {
    color: ${({ theme }) => theme.colors.AccentGreen};
    font-size: ${({ theme }) => theme.sizes.fonts.xl};
    font-weight: 500;
  }

  // cart button
  button {
    padding: ${({ theme }) => theme.sizes.spacing.xs};
    font-size: ${({ theme }) => theme.sizes.fonts.lg};
  }

  svg {
    width: 2rem;
    height: 2rem;
  }

  button path {
    fill: ${({ theme }) => theme.colors.light};
  }

  button:hover path,
  button:focus path {
    fill: ${({ theme }) => theme.colors.dark};
  }

  @supports selector(:focus-visible) {
    button:focus path {
      fill: ${({ theme }) => theme.colors.light};
    }

    button:hover path,
    button:focus-visible path {
      fill: ${({ theme }) => theme.colors.dark};
    }
  }
`;

export const ProductTile: React.FC<{ product: Product }> = ({ product }) => {
  const { t } = useTranslation();
  const { addToCart } = useContext(CartContext);
  return (
    <ProductTileContainer data-testid="product-tile">
      {/* TODO: Add src when source image is available */}
      <img
        className="product-tile-img"
        src={`https://picsum.photos/seed/${product.name}/270`}
        alt={product.name as string}
      />

      <div className="product-tile-like-row">
        <h3 className="product-tile-title">{product.name}</h3>
        <IconButton
          Icon={Like}
          stroke="false"
          buttonSize="x-small"
          className="like-button"
        />
      </div>
      <ProductPrice price={product.price} locale={userLocale}></ProductPrice>

      <Button
        handleClick={() => {
          addToCart(product);
        }}
        color="primary"
      >
        {t('addToCart')}
        <Cart />
      </Button>
    </ProductTileContainer>
  );
};
