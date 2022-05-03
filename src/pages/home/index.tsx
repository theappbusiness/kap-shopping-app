import { ProductTiles } from '../../components/product-tiles/ProductTiles';
import { Hero } from '../../components/hero/index';
export const HomePage: React.FC = () => {
  return (
    <>
      <Hero />
      <ProductTiles />
    </>
  );
};
