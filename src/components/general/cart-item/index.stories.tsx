import { ComponentStory } from '@storybook/react';
import { CartItem } from '.';

// eslint-disable-next-line import/no-default-export
export default {
  title: 'Components/Cart Item',
  component: CartItem,
  argTypes: {
    onDecreaseStepperClick: { action: 'onDecreaseStepperClick' },
    onIncreaseStepperClick: { action: 'onIncreaseStepperClick' },
    onRemoveClick: { action: 'onRemoveClick' },
  },
};

const Template: ComponentStory<typeof CartItem> = (args) => (
  <CartItem {...args} />
);

export const Standard = Template.bind({});
Standard.args = {
  imgSrc: `https://picsum.photos/seed/test/270`,
  name: 'test-name',
  quantity: 1000000,
};
