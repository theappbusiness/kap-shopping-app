import { Product } from "../types/product";
import Button from "./general/Button";

const ProductTile = ({ product }: { product: Product }) => {
  const handleClick = () => {
    // TODO: Add to cart
  };

  return (
    <li>
      <img width="100px" height="100px" src="" alt="" />
      <h3>{product.name}</h3>
      <h4>{product.price}</h4>
      <Button onClick={handleClick}>Add to cart</Button>
    </li>
  );
};

export default ProductTile;
