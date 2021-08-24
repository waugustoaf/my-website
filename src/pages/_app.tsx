import { AppProps } from 'next/dist/shared/lib/router/router';
import { useEffect } from 'react';
import { HooksProvider } from '../hooks';
import { GlobalStyle } from '../styles/global';

const MyApp = ({ Component, pageProps }: AppProps) => {
  useEffect(() => {
    if (typeof window === 'undefined') return;
    document.addEventListener('contextmenu', event => event.preventDefault());
  }, []);

  return (
    <HooksProvider>
      <Component {...pageProps} />
      <GlobalStyle />
    </HooksProvider>
  );
};

export default MyApp;
