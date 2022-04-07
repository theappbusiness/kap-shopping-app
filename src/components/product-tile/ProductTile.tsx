import styled from "styled-components";
import { Product } from "../../types/product";

const ProductTileContainer = styled.li`
  width: 100%;

  & .product-tile-img {
    width: 100%;
    height: auto;
  }

  & .product-tile-title {
    font-size: 1.5rem;
    font-weight: 300;
    margin-top: 0.5rem;
  }

  & .product-tile-price {
    font-size: 1.3rem;
    font-weight: 300;
  }

  // TODO: Extract button to its own general components
  & button {
    margin-top: 1.5rem;
    width: 100%;
    background-color: #18181a;
    color: #e4e4ee;
    padding: 0.8rem;
    font-size: 1.3rem;
    outline: none;
    border: none;
    cursor: pointer;

    & i {
      font-size: 1.4rem;
      margin-left: 0.5rem;
    }
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
        src="https://picsum.photos/seed/picsum/200"
        alt={product.name as string}
      />
      <h3 className="product-tile-title">{product.name}</h3>
      <h4 className="product-tile-price">£{product.price}</h4>
      <button onClick={handleClick}>
        Add to cart <i className="fa-solid fa-bag-shopping"></i>
      </button>
    </ProductTileContainer>
  );
};

export default ProductTile;
