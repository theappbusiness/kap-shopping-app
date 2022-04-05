import ProductTile from "./ProductTile";
import Spinner from "./Spinner";
import { useProductsData } from "./useProductsData";

const ProductTiles = () => {
  const { products, error, loading } = useProductsData();

  if (loading) {
    return <Spinner />;
  } else if (error) {
    return <p>{error.message}</p>;
  } else {
    return (
      <div>
        {products.map((product) => (
          <ProductTile product={product} />
        ))}
      </div>
    );
  }
};

export default ProductTiles;
