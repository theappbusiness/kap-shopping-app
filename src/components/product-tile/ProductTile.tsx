import { useTranslation } from 'react-i18next';
import styled from 'styled-components';
import i18n from 'i18next';
import { Product } from '../../types/product';
import '../../translations/i18n';
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

export const ProductTile: React.FC<{ product: Product }> = ({ product }) => {
  // TODO: Add translations and currency formatting
  const { t } = useTranslation();
  const changeLanguage = (lang: string) => {
    i18n.changeLanguage(lang);
  };

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
        <button
          style={{ marginRight: '10px' }}
          onClick={() => changeLanguage('en')}
        >
          EN
        </button>
        <button
          style={{ marginRight: '10px' }}
          onClick={() => changeLanguage('pt')}
        >
          PT
        </button>
        <button onClick={() => changeLanguage('fn')}>FN</button>
        <h3 className="product-tile-title">{t('product.name')}</h3>
        <h4 className="product-tile-price">£{product.price}</h4>
      </div>
      <Button handleClick={handleClick} iconName="shopping-bag">
        Add to cart
      </Button>
    </ProductTileContainer>
  );
};
