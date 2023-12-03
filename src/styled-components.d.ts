import 'styled-components';
import { spacing } from './styles/spacing';
import { Colors } from './styles/colors';

declare module 'styled-components' {
  export interface DefaultTheme {
    colors: Colors;
    spacing: (number: number) => string;
  }
}
