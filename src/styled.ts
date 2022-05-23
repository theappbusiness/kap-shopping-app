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
  secondary: '#fafaff',
  info: '#5f5fc6',
  success: '#339b63',
  warning: '#e6ab09',
  danger: '#e60927',
  AccentGreen: 'rgba(46, 125, 54, 1)',
  AccentPeach: 'rgba(220, 174, 151, 1)',
  AccentYellow: 'rgba(224, 175, 106, 1)',
  Danger10: 'rgba(244, 240, 209, 1)',
  Danger20: 'rgba(226, 210, 68, 1)',
  Grey10: 'rgba(224, 224, 224, 1)',
  Grey20: 'rgba(189, 189, 189, 1)',
  Grey30: 'rgba(158, 158, 158, 1)',
  Grey40: 'rgba(117, 117, 117, 1)',
  Grey50: 'rgba(97, 97, 97, 1)',
  Grey60: 'rgba(66, 66, 66, 1)',
  Grey70: 'rgba(33, 33, 33, 1)',
  Info10: 'rgba(209, 224, 244, 1)',
  Info20: 'rgba(97, 142, 204, 1)',
  Neutral10: 'rgba(252, 247, 242, 1)',
  Neutral20: 'rgba(245, 235, 224, 1)',
  Neutral30: 'rgba(227, 218, 208, 1)',
  NeutralWhite: 'rgba(255, 255, 255, 1)',
  Orange10: 'rgba(251, 235, 229, 1)',
  Orange20: 'rgba(248, 221, 212, 1)',
  Orange30: 'rgba(245, 208, 195, 1)',
  Orange40: 'rgba(238, 183, 164, 1)',
  Orange50: 'rgba(230, 161, 139, 1)',
  Orange60: 'rgba(222, 143, 118, 1)',
  Orange70: 'rgba(224, 122, 95, 1)',
  Success10: 'rgba(209, 244, 212, 1)',
  Success20: 'rgba(97, 204, 106, 1)',
  Warning10: 'rgba(244, 215, 209, 1)',
  Warning20: 'rgba(226, 94, 68, 1)',
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
