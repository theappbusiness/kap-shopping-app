import { Product } from "../types/product";

const ProductTile = ({ product }: { product: Product }) => {
  return <div>{product.name}</div>;
};

export default ProductTile;
