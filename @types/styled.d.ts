import 'styled-components';

declare module 'styled-components' {
  export interface DefaultTheme {
      background: string;
      text: string;
      input: string;
      listBackground: string;
      listBox: string;
  }
}