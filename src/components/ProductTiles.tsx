import ProductTile from "./ProductTile";
import Spinner from "./Spinner";
import { useProductsData } from "./useProductsData";

const ProductTiles = () => {
  const { products, error, isLoading } = useProductsData();

  if (isLoading) {
    return <Spinner />;
  } else if (error) {
    return <p>{error.message}</p>;
  } else {
    return (
      <ul>
        {products.map((product) => (
          <ProductTile product={product} />
        ))}
      </ul>
    );
  }
};

export default ProductTiles;
