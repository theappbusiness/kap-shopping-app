import { registerIcons } from '../src/registerIcons';
import { ThemeProvider } from 'styled-components';
import { theme } from '../src/styled';

registerIcons();

export const parameters = {
  actions: { argTypesRegex: '^on[A-Z].*' },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
};

const withThemeProvider = (Story) => {
  return (
    <ThemeProvider theme={theme}>
      <Story />
    </ThemeProvider>
  );
};
export const decorators = [withThemeProvider];
