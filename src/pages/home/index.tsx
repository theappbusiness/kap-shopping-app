import { ProductTiles } from '../../components/product-tiles/ProductTiles';
import { Hero } from '../../components/hero/index';
import { SearchInput } from '../../components/search';

export const HomePage: React.FC = () => {
  return (
    <>
      <SearchInput />
      <Hero />
      <ProductTiles />
    </>
  );
};
