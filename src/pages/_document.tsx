import Document, { Html, Head, Main, NextScript } from 'next/document';

import { AppConfig } from '../utils/AppConfig';

// Need to create a custom _document because i18n support is not compatible with `next export`.
class MyDocument extends Document {
  render() {
    return (
      <Html lang={AppConfig.locale}>
        <Head>
          <meta name='description' content='Taróloga cheia de axé. Oraculista' />
          <meta property='og:title' content='Cartomante Afrodite' />
          <meta
            property='og:description'
            content='Taróloga cheia de axé. Oraculista'
          />
          <meta property='og:url' content='https://afrodite-nextjs.netlify.app' />
          <meta property='og:type' content='website' />
          <link rel='icon' href='/favicon.ico' />

          <meta name="keywords" content="Taróloga, Oraculista, Afrodite, Afrodite Cartomante, Cartomante, Baralho Cigano, Maria Padilha, Axé" />
          <meta name="author" content="Afrodite Cartomante" />

          <meta name="theme-color" content="#CB6CE7" /> 
          <meta name="apple-mobile-web-app-status-bar-style" content="#CB6CE7" /> 
          <meta name="msapplication-navbutton-color" content="#CB6CE7" /> 

        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
