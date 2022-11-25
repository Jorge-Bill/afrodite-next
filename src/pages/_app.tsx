import { AppProps } from 'next/app';
import ReactGA from 'react-ga';

import '../styles/main.css';

const MyApp = ({ Component, pageProps }: AppProps) => {
  ReactGA.initialize('G-MVT8RW51Z5');

  return (
    <Component {...pageProps} />
  );
};

export default MyApp;
