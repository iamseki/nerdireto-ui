import { AppProps } from 'next/app'
import { ThemeProvider } from 'styled-components'

const theme = {
    light:  '#fff',
    dark: '#222'
}

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider theme ={theme}>
      <Component {...pageProps} />
    </ThemeProvider> 
  )
}

export default MyApp