import 'styled-components';

declare module 'styled-components' {
  export interface DefaultTheme {
      background: string;
      text: string;
      input: string;
      card: string;
      code: string;
      hover: string;
      modal: string;
      textModal: string;
      tag:string;
      hr: string;
  }
}