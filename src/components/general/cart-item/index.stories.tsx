import { ThemeProvider } from 'styled-components';
import { ComponentStory } from '@storybook/react';
import { theme } from '../../../styled';
import { registerIcons } from '../../../registerIcons';
import { CartItem } from '.';
registerIcons();

// eslint-disable-next-line import/no-default-export
export default {
  title: 'Components/Cart Item',
  component: CartItem,
  argTypes: {
    alterQuantity: { action: 'alterQuantity' },
    removeItem: { action: 'removeItem' },
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
