import { Key } from "react";
import ProductTile from "./ProductTile";
import Spinner from "./general/Spinner";
import { useProductsData } from "./useProductsData";

const ProductTiles = () => {
  const { products, error, loading } = useProductsData();

  if (loading) {
    return <Spinner />;
  } else if (error) {
    return <p>{error.message}</p>;
  } else {
    return (
      <ul>
        {products.map((product) => (
          <ProductTile product={product} key={product.id as Key} />
        ))}
      </ul>
    );
  }
};

export default ProductTiles;
