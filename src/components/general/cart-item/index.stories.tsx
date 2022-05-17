import { ThemeProvider } from 'styled-components';
import { ComponentStory } from '@storybook/react';
import { theme } from '../../../styled';
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
  <ThemeProvider theme={theme}>
    <CartItem {...args} />
  </ThemeProvider>
);

export const Standard = Template.bind({});
Standard.args = {
  imgSrc: `https://picsum.photos/seed/test/270`,
  name: 'test-name',
  quantity: 1000000,
};
