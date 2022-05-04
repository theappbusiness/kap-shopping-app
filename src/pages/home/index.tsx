import { ProductTiles } from '../../components/product-tiles/ProductTiles';
import { Input } from '../../components/general/input';
import { Hero } from '../../components/hero/index';

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
      <Hero />
      <ProductTiles />
    </>
  );
};
