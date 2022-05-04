import { ProductTiles } from '../../components/product-tiles/ProductTiles';
import { Input } from '../../components/general/input';
export const HomePage: React.FC = () => {
  return (
    <>
      <Input
        onChange={(e) => {
          console.log(e.target.value);
        }}
        type="text"
        placeholder="Search Shoply"
      />
      <ProductTiles />
    </>
  );
};
