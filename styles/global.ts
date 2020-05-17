import { createGlobalStyle, ThemeConsumer } from 'styled-components'

export default createGlobalStyle`
  *{
    margin: 0;
    padding: 0;
    outline: 0;
    box-sizing: border-box;
  }

  body {
    /*background: linear-gradient(#242323 15%, rgba(36, 34, 34, 0) 70%), #433E3E;*/
    background: ${({theme}) => theme.background};
    background-repeat: no-repeat;
    -webkit-font-smoothing: antialiased;
  }

  h1,h2,h3,h4,h5,small,strong,p,button,input,div{
    color: ${({theme}) => theme.text}
  }

  body, input, button {
    font: 16px 'Roboto Mono',monospace, sans-serif;
    transition: all 0.25s linear;
  }


  svg {
    transition: opacity 0.3s;
    &:hover {
      opacity: 0.5;
    }
  }

  #__next {
    max-width: 1200px;
    margin: 0 auto;
  }

  button  {
    cursor: pointer;
  }
`;
