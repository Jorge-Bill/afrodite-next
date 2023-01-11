import Document, { Html, Head, Main, NextScript } from 'next/document';

import { AppConfig } from '../utils/AppConfig';

// Need to create a custom _document because i18n support is not compatible with `next export`.
class MyDocument extends Document {
  render() {
    return (
      <Html lang={AppConfig.locale}>
        <Head>
          <title>Afrodite Cartomante</title>
          <meta name='description' content='Taróloga cheia de axé. Oraculista - Tarot, Baralho Cigano, Mesa Real Leituras específicas!!! Guiadas por Maria Padilha' />
          <meta property='og:title' content='Cartomante Afrodite' />
          <meta
            property='og:description'
            content='Taróloga cheia de axé. Oraculista'
          />
          <meta property='og:url' content='https://afrodite-nextjs.netlify.app' />
          <meta property='og:type' content='website' />
          <link rel='icon' href='/favicon.ico' />
          <link rel="alternate" type="application/rss+xml" title="Afrodite Cartomante RSS feed" href="/rss.xml" />
          <link rel="alternate" type="application/sitemap+xml" title="Afrodite Cartomante sitemap" href="/sitemap.xml" />

          <meta 
            name="keywords" 
            content="
              Taróloga, 
              Oraculista, 
              Afrodite, 
              Afrodite Cartomante, 
              Cartomante, 
              Baralho Cigano, 
              Maria Padilha, 
              Axé, 
              Tarot, 
              Afrodite Taróloga, 
              A melhor Taróloga do Brasil,
              Zé Pelintra,
              Tarot Online,
              Magias,
              Bruxaria,
              Wicca,
              Bruxa Natural,
              Consultas,
              Tarot,
              Consultas online,
              Tarot Online,
              Baralho Cigano Online,
              Taróloga online,
              cartas de tarot,
              o tarot,
              cartas tarot,
              cartas do tarot,
              cartas e tarot,
              tarot carta,
              as cartas do tarot,
              cartas de cartomante,
              as cartas de tarot,
              tarot e cartas,
              tarot quantas cartas,
              cartas cartomante,
              cartomante tarot,
              tarot afrodite,
              carta de cartomante,
              quais as cartas do tarot,
              tarot das cartas,
              afrodite tarot,
              tarot cartomante,
              cartas no tarot,
              tarot de afrodite,
              quantas cartas tarot,
              a carta tarot,
              sobre o tarot,
              Lilith" />
          <meta name="author" content="Afrodite Cartomante" />

          <meta name="theme-color" content="#CB6CE7" /> 
          <meta name="apple-mobile-web-app-status-bar-style" content="#CB6CE7" /> 
          <meta name="msapplication-navbutton-color" content="#CB6CE7" /> 

          <meta property="og:image" content="https://afroditecartomante.netlify.app/assets/images/profile.jpeg" />
          <meta property="og:image:type" content="image/jpeg" />
          <meta property="og:image:width" content="800" /> 
          <meta property="og:image:height" content="600" />
        </Head>
        <body>
          <Main />
          <NextScript />
          <script async src="https://www.tiktok.com/embed.js"></script>
        </body>
      </Html>
    );
  }
}

export default MyDocument;
