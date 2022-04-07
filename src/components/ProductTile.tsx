import styled from "styled-components";
import { useTranslation } from "react-i18next";
import { Product } from "../types/product";

const ProductTileContainer = styled.li`
  width: 100%;

  & img {
    width: 100%;
    height: 20rem;
  }

  & h3 {
    font-size: 1.5rem;
    font-weight: 300;
  }

  & h4 {
    font-size: 1.3rem;
    font-weight: 300;
  }

  & button {
    margin-top: 1.5rem;
    width: 100%;
    background-color: #18181a;
    color: #e4e4ee;
    padding: 0.8rem;
    font-size: 1.3rem;
    outline: none;
    border: none;

    & i {
      font-size: 1.4rem;
      margin-left: 0.5rem;
    }
  }
`;

const ProductTile = ({ product }: { product: Product }) => {
  // TODO: Add translations and currency formatting
  const { t } = useTranslation();

  const handleClick = () => {
    // TODO: Add to cart
  };

  return (
    <ProductTileContainer>
      <img src="" alt="" />
      <h3>{product.name}</h3>
      <h4>£{product.price}</h4>
      <button onClick={handleClick}>
        Add to cart <i className="fa-solid fa-bag-shopping"></i>
      </button>
    </ProductTileContainer>
  );
};

export default ProductTile;
