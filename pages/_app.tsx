import { AppProps } from 'next/app'
import { useState } from 'react'
import { ThemeProvider } from 'styled-components'
import GlobalStyle from '../styles/global';
import Header from '../components/Header';
import Head from 'next/head'

const lightTheme = {
    background: 'linear-gradient(180deg, #e1e1e1 5%, rgba(36, 34, 34, 0) 50%), #fff',
    text: '#222',
    input: '#FFEEEA',
    listBackground: '#e1e1e1',
    listBox: 'rgba(213, 217, 222, 0.8)'
}
const darkTheme = {
    background: 'linear-gradient(180deg, #242323 15%, rgba(36, 34, 34, 0) 100%), #313131',
    text: '#f0f7f0',
    input: '#fff',
    listBackground: '#383737',
    listBox: 'rgba(32, 32, 32, 0.8)'
}

function MyApp({ Component, pageProps }: AppProps) {
  const [theme, setTheme] = useState('light')

  function handleThemeButton(themeChecked:string){
    themeChecked === 'dark' ? setTheme('dark') : setTheme('light');
  }

  return (
    <ThemeProvider theme={theme === 'light' ? lightTheme:darkTheme}>
      <Head>
        <title>Nerdireto</title>
      </Head>
      <GlobalStyle/>
      <Header themeHandler={handleThemeButton}/>
      <Component {...pageProps} />
    </ThemeProvider> 
  )
}

export default MyApp