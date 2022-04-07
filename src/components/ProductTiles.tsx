import { Key } from "react";
import styled from "styled-components";
import ProductTile from "./ProductTile";
import Spinner from "./general/Spinner";
import { useProductsData } from "./useProductsData";

const ProductTylesContainer = styled.ul`
  display: grid;
  grid-template-columns: repeat(5, 1fr);
`;

const ProductTiles = () => {
  const { products, error, loading } = useProductsData();

  if (loading) {
    return <Spinner />;
  } else if (error) {
    return <p>{error.message}</p>;
  } else {
    return (
      <ProductTylesContainer>
        {products.map((product) => (
          <ProductTile product={product} key={product.id as Key} />
        ))}
      </ProductTylesContainer>
    );
  }
};

export default ProductTiles;
