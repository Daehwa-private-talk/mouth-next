type ColorVariant = 'main' | 'sub';

export type PrimaryColorType = { [variant in ColorVariant]: string };

export type Color = 'black' | 'dark' | 'violet' | 'purple' | 'red' | 'yellow';

const primaryColors: PrimaryColorType = {
  main: '#ffee93',
  sub: '#fcf5c7',
};

export const colors = {
  primary: primaryColors,
  secondary: '#ffc09f',
  white: '#ffffff',
  black: '#333333',
  dark: '#183f3c',
  darkGray: '#4a4a4a',
  gray: '#A4A7B3',
  lightGray: '#e9e9e9',
  violet: '#ad588f',
  purple: '#555188',
  red: '#ec6e69',
  yellow: '#f1aa3c',
};

export type Colors = typeof colors;
