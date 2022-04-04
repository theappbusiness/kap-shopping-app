import { Product } from "../types/product";
import WithProductsData from "./WithProductsData";
import ProductTile from "./ProductTile";

const ProductTiles = ({ products }: { products: Product[] }) => {
  return (
    <ul>
      {products.map((product) => (
        <ProductTile product={product} />
      ))}
    </ul>
  );
};

export default WithProductsData(ProductTiles);
