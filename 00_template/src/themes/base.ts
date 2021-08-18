import { createTheme } from './utils';

export interface ITheme {
  [key: string]: string;
}

export const baseTheme = createTheme({
  primary: 'blue',
  secondary: 'gray',
  textBase: 'green',
});
