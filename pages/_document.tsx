import Document, { Html, Head, Main, NextScript } from 'next/document';
import { ServerStyleSheet } from 'styled-components';

class CustomDocument extends Document {
  static async getInitialProps(ctx:any) {
    const sheet = new ServerStyleSheet()
    const originalRenderPage = ctx.renderPage

    try {
      ctx.renderPage = () =>
        originalRenderPage({
          enhanceApp: (App:any) => (props:any) => sheet.collectStyles(<App {...props} />),
        })

      const initialProps = await Document.getInitialProps(ctx)
      return {
        ...initialProps,
        styles: (
          <>
            {initialProps.styles}
            {sheet.getStyleElement()}
          </>
        ),
      }
    } finally {
      sheet.seal()
    }
  }

  render() {
    return (
      <Html lang="pt-br">
        <Head>
          <link href="https://fonts.googleapis.com/css2?family=DM+Mono:ital,wght@0,400;0,500;1,400;1,500&family=Roboto+Mono:ital,wght@0,300;0,400;0,500;1,500&display=swap" rel="stylesheet"/>
          <meta name="og:description" content="Sendo direto e reto sem enrolamento, venha disseminar o conhecimento !"/>
          <meta name="description" content="Sendo direto e reto sem enrolamento, venha disseminar o conhecimento !"/>
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default CustomDocument;