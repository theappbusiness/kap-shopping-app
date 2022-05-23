import { useTranslation } from 'react-i18next';
import styled from 'styled-components';
import { useContext } from 'react';
import { Product } from '../../types/product';
import '../../translations/i18n';
import { Button } from '../general/button';
import { userLocale } from '../../translations/userLocale';
import { CartContext } from '../../contexts/Cart';
import { createCartCookie } from '../../utils/cookies';
import { postOrder } from '../../services/product.service';
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

const postOrderCreateCookie = async (product: Product) => {
  try {
    const productOrder = [{ product: product.id, quantity: 1 }];
    const order = await postOrder(productOrder);
    createCartCookie(order.id);
  } catch (err) {
    console.log(err);
  }
};

export const ProductTile: React.FC<{ product: Product }> = ({ product }) => {
  const { t } = useTranslation();
  const { cart, addItem, changeQuantity } = useContext(CartContext);

  const handleClick = () => {
    postOrderCreateCookie(product);

    const productInCart = cart.find((item) => item.id === product.id);
    productInCart ? changeQuantity(product.id, 1) : addItem(product, 1);
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
        {t('addToCart')}
      </Button>
    </ProductTileContainer>
  );
};
