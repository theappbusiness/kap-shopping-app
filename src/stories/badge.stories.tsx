import { ThemeProvider } from 'styled-components';
import { ComponentStory } from '@storybook/react';
import { Badge } from '../components/general/badge';
import { theme } from '../styled';

// eslint-disable-next-line import/no-default-export
export default {
  title: 'Badge',
  component: Badge,
};

const Template: ComponentStory<typeof Badge> = (args) => (
  <ThemeProvider theme={theme}>
    <Badge {...args} />
  </ThemeProvider>
);

export const Standard = Template.bind({});
Standard.args = {
  label: 3,
};
