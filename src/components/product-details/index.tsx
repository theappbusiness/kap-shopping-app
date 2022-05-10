import styled from 'styled-components';
import { Product } from '../../types/product';
import { Button } from '../../components/general/button';
import { ProductPrice } from '../../components/product-tile/product-price/ProductPrice';
import { userLocale } from '../../translations/userLocale';

const StyledProductDetails = styled.div`
  // CHANGE TO MEDIA QUERY

  margin: ${({ theme }) => theme.sizes.spacing.xxl};
  max-width: 500px;
  border: red solid 1px;

  & .product-details-img {
    width: 100%;
    height: auto;
  }

  & .product-details-title {
    font-size: ${({ theme }) => theme.sizes.fonts.xxl};
    font-weight: 300;
  }

  & .product-details-div {
    padding: ${({ theme }) => theme.sizes.spacing.xxl} 0;
    font-weight: 200;
  }
`;

export const ProductDetails: React.FC<{ product: Product }> = ({ product }) => {
  const handleClick = () => {
    // TODO: Add to cart
  };

  return (
    <StyledProductDetails>
      <img
        className="product-details-img"
        src={`https://picsum.photos/seed/${product.name}/270`}
        alt={product.name as string}
      />
      <div className="product-details-div">
        <h3 className="product-details-title">{product.name}</h3>
        <ProductPrice price={product.price} locale={userLocale}></ProductPrice>
        <p data-testid="product-details-description">{product.description}</p>
      </div>
      <Button handleClick={handleClick} iconName="shopping-bag">
        Add to cart
      </Button>
    </StyledProductDetails>
  );
};
