import "react-notion/src/styles.css";
import "prismjs/themes/prism-tomorrow.css";
import { AppProps } from 'next/app'
import { useState } from 'react'
import { ThemeProvider } from 'styled-components'
import { GlobalStyle } from '../styles/global';
import Header from '../components/Header';
import Head from 'next/head'


const lightTheme = {
  background: '#fff',
  text: '#222',
  input: '#e7e7e7',
  card: '#fff',
  hover: 'rgba(213, 217, 222, 0.4)',
  code:'rgba(213, 217, 222, 0.2)',
  modal: 'rgba(32, 32, 32, 0.8)',
  textModal: '#222',
  tag: '#FFEEEA',
  hr: 'rgba(55, 55, 55, 0.2)',
  string: '#2E8B57'
}
const darkTheme = {
  background: 'linear-gradient(180deg, #242323 15%, rgba(36, 34, 34, 0) 100%), #313131',
  text: '#f0f7f0',
  input: '#fff',
  card: '#383737',
  code: '#3b3c3d',
  hover: 'rgba(32, 32, 32, 0.8)',
  modal: '#f0f7f0',
  textModal: '#fff',
  tag: '#5294ff',
  hr: 'rgba(237, 237, 237, 0.3)',
  string: '#FEE12B'
}

function MyApp({ Component, pageProps }: AppProps) {
  const [theme, setTheme] = useState('light')

  function handleThemeButton(themeChecked: string) {
    themeChecked === 'dark' ? setTheme('dark') : setTheme('light');
  }

  return (
    <ThemeProvider theme={theme === 'light' ? lightTheme : darkTheme}>
      <Head>
        <title>Nerdireto</title>
      </Head>
      <GlobalStyle />
      <Header themeHandler={handleThemeButton} />
      <Component {...pageProps} />
    </ThemeProvider>
  )
}

export default MyApp