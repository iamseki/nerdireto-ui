import { AppProps } from 'next/app'
import { ThemeProvider } from 'styled-components'
import GlobalStyle from '../styles/global';
import Header from '../components/Header';

const theme = {
    light:  '#fff',
    dark: '#222'
}

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider theme ={theme}>
      <Header />
      <Component {...pageProps} />
      <GlobalStyle/>
    </ThemeProvider> 
  )
}

export default MyApp