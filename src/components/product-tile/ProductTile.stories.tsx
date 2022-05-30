import { ComponentStory } from '@storybook/react';
import { ProductTile } from './ProductTile';

// eslint-disable-next-line import/no-default-export
export default {
  title: 'Components/Product-Tile',
  component: ProductTile,
};

const Template: ComponentStory<typeof ProductTile> = (args) => (
  <ProductTile {...args}></ProductTile>
);

export const Standard = Template.bind({});
Standard.args = {
  product: {
    id: 'testid',
    name: 'test',
    description: 'this is a storybook product',
    price: 150,
    stock: 1,
    category: {
      name: 'category',
      description: 'description',
    },
  },
};
