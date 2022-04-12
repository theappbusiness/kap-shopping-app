import 'styled-components';

// See https://styled-components.com/docs/api#typescript
// for info on extending the DefaultTheme type

export interface ContextualColors {
  primary: string;
  secondary: string;
  info: string;
  success: string;
  warning: string;
  danger: string;
}

export type Colors = ContextualColors & {
  white: string;
  black: string;
  dark: string;
  light: string;
};

export type Color = Colors[keyof Colors];

export interface Swatch {
  main: Color;
  contrast: Color;
}

export interface Sizes {
  xxs: string;
  xs: string;
  sm: string;
  md: string;
  lg: string;
  xl: string;
  xxl: string;
}

export interface Theme {
  colors: Colors;
  palette: Record<keyof ContextualColors, Swatch>;
  sizes: {
    spacing: Sizes;
    fonts: Sizes;
  };
}

declare module 'styled-components' {
  interface DefaultTheme extends Theme {}
}
