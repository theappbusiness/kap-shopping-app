import { Product } from "../types/product";

const ProductTile = ({ product }: { product: Product }) => {
  const handleClick = () => {
    // TODO: Add to cart
  };

  return (
    <li>
      <img width="100px" height="100px" src="" alt="" />
      <h3>{product.name}</h3>
      <h4>{product.price}</h4>
      <button onClick={handleClick}>Add to cart</button>
    </li>
  );
};

export default ProductTile;
