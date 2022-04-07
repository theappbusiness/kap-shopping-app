import styled from "styled-components";
import { useTranslation } from "react-i18next";
import { Product } from "../types/product";
import Button from "./general/Button";

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
    font-size: 1.2rem;
    font-weight: 300;
  }
`;

const ProductTile = ({ product }: { product: Product }) => {
  // TODO: Add translations
  const { t } = useTranslation();

  const handleClick = () => {
    // TODO: Add to cart
  };

  return (
    <ProductTileContainer>
      <img src="" alt="" />
      <h3>{product.name}</h3>
      <h4>{product.price}</h4>
      <Button onClick={handleClick}>Add to cart</Button>
    </ProductTileContainer>
  );
};

export default ProductTile;
