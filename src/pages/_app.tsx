import { AppProps } from 'next/dist/shared/lib/router/router';
import { HooksProvider } from '../hooks';
import { GlobalStyle } from '../styles/global';

const MyApp = ({ Component, pageProps }: AppProps) => {
  return (
    <HooksProvider>
      <Component {...pageProps} />
      <GlobalStyle />
    </HooksProvider>
  );
};

export default MyApp;
