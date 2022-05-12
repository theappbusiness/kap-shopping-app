import { createGlobalStyle } from 'styled-components';
import { Colors, Theme } from './styles.d';

export const GlobalStyle = createGlobalStyle`
  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
    font-family: "Open Sans", sans-serif;
  }

  ul {
    list-style: none;
  }

  :root {
    --grid-factor: 2;
    @media (min-width: 600px) {
      --grid-factor: 3;
    }
  
    @media (min-width: 800px) {
      --grid-factor: 4;
    }
  
    @media (min-width: 1000px) {
      --grid-factor: 5;
    }
  }
`;

const colors: Colors = {
  dark: '#18181a',
  light: '#e4e4ee',
  white: '#fafaff',
  black: '#00000d',
  primary: '#18181a',
  secondary: '#e4e4ee',
  info: '#339b63',
  success: '#5f5fc6',
  warning: '#e6ab09',
  danger: '#e60927',
};

export const theme: Theme = {
  colors,
  palette: {
    primary: {
      main: colors.primary,
      contrast: colors.light,
    },
    secondary: {
      main: colors.secondary,
      contrast: colors.dark,
    },
    info: {
      main: colors.info,
      contrast: colors.light,
    },
    success: {
      main: colors.success,
      contrast: colors.light,
    },
    warning: {
      main: colors.warning,
      contrast: colors.dark,
    },
    danger: {
      main: colors.danger,
      contrast: colors.light,
    },
  },
  sizes: {
    spacing: {
      xxs: '1px',
      xs: '2px',
      sm: '4px',
      md: '8px',
      lg: '16px',
      xl: '24px',
      xxl: '32px',
    },
    fonts: {
      xxs: '0.375rem',
      xs: '.5rem',
      sm: '.75rem',
      md: '0.875rem',
      lg: '1rem',
      xl: '1.25rem',
      xxl: '1.5rem',
    },
  },
} as const;
