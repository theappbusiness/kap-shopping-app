import { ProductTiles } from '../../components/product-tiles/ProductTiles';
import { Hero } from '../../components/hero/index';
import { List } from '../../components/general/list';
import { SearchInput } from '../../components/search';

export const HomePage: React.FC = () => {
  return (
    <>
      <SearchInput />
      <List items={[]} />
      <List items={['test string  1/1']} />
      <List items={['test string 1/3', 'test string 2/3', 'test string 3/3']} />
      <Hero />

      <ProductTiles />
    </>
  );
};
