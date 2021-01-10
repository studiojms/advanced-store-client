import { AppProps } from 'next/app';
import Head from 'next/head';

import GlobalStyles from 'styles/global';

function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>Advanced Store - Boilerplate</title>
        <link rel="shortcut icon" href="" />
        <link rel="apple-touch-icon" href="" />
        <meta
          name="description"
          content="A simple project starter to work with typescript, react, nextjs and styled components"
        />
      </Head>
      <GlobalStyles />
      <Component {...pageProps} />
    </>
  );
}

export default App;
