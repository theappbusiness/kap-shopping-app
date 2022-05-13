import { Button } from '.';
import { ComponentStory } from '@storybook/react';
import { ThemeProvider } from 'styled-components';
import { theme } from '../../../styled';
import { registerIcons } from '../../../registerIcons';
// eslint-disable-next-line import/no-default-export
export default {
  title: 'Components/Button',
  component: Button,
  argTypes: {
    handleClick: { action: 'handleClick' },
    iconName: { type: 'string' },
  },
};
registerIcons();

const Template: ComponentStory<typeof Button> = (args) => (
  <ThemeProvider theme={theme}>
    <Button {...args} />
  </ThemeProvider>
);

export const Primary = Template.bind({});
Primary.args = {
  color: 'primary',
  iconName: 'shopping-bag',
  children: 'Click me',
};
export const Secondary = Template.bind({});
Secondary.args = {
  color: 'secondary',
  iconName: 'shopping-bag',
  children: 'Click me',
};
export const Success = Template.bind({});
Success.args = {
  color: 'success',
  iconName: 'shopping-bag',
  children: 'Click me',
};
export const Info = Template.bind({});
Info.args = {
  color: 'info',
  iconName: 'shopping-bag',
  children: 'Click me',
};
export const Warning = Template.bind({});
Warning.args = {
  color: 'warning',
  iconName: 'shopping-bag',
  children: 'Click me',
};
export const Danger = Template.bind({});
Danger.args = {
  color: 'danger',
  iconName: 'shopping-bag',
  children: 'Click me',
};
