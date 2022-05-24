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
  AccentGreen: string;
  AccentPeach: string;
  AccentYellow: string;
  Danger10: string;
  Danger20: string;
  Grey10: string;
  Grey20: string;
  Grey30: string;
  Grey40: string;
  Grey50: string;
  Grey60: string;
  Grey70: string;
  Info10: string;
  Info20: string;
  Neutral10: string;
  Neutral20: string;
  Neutral30: string;
  NeutralWhite: string;
  Orange10: string;
  Orange20: string;
  Orange30: string;
  Orange40: string;
  Orange50: string;
  Orange60: string;
  Orange70: string;
  Success10: string;
  Success20: string;
  Warning10: string;
  Warning20: string;
};

export type Color = Colors[keyof Colors];

export interface Swatch {
  main: Color;
  contrast: Color;
}
export interface SwatchV2 {
  hover: Color;
  hoverShadow: Color;
  shadow: Color;
  borderColor: Color;
  borderRadius: string;
  background: Color;
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
  paletteV2: Record<keyof ContextualColors, SwatchV2>;
  sizes: {
    spacing: Sizes;
    fonts: Sizes;
  };
}

declare module 'styled-components' {
  // eslint-disable-next-line @typescript-eslint/no-empty-interface
  interface DefaultTheme extends Theme {}
}
