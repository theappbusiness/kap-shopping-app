import { ProductTiles } from '../../components/product-tiles/ProductTiles';
import { Input } from '../../components/general/input';
import { Hero } from '../../components/hero/index';

import { List } from '../../components/general/list';
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
      <List items={[]} />
      <List items={['test string  1/1']} />
      <List items={['test string 1/3', 'test string 2/3', 'test string 3/3']} />
      <Hero />

      <ProductTiles />
    </>
  );
};
