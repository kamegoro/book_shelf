import '@/styles/globals.css';
import type { AppProps } from 'next/app';
import { ThemeProvider } from '@mui/material';
import theme from '@/styles/theme';
import Router from 'next/router';
import nProgress from 'nprogress';
import 'nprogress/nprogress.css';

import Box from '@/components/mui/Box';
import Head from 'next/head';

Router.events.on('routeChangeStart', () => nProgress.start());
Router.events.on('routeChangeError', () => nProgress.done());
Router.events.on('routeChangeComplete', () => nProgress.done());

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>Create Next App</title>
        <meta
          name="description"
          content="Generated by create next app"
        />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1"
        />
        <link
          rel="icon"
          href="/favicon.ico"
        />
      </Head>

      <Box
        sx={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          backgroundColor: '#f0f3fd',
          width: '100%',
          height: '100%',
          px: 4,
        }}
      >
        <ThemeProvider theme={theme}>
          <Component {...pageProps} />
        </ThemeProvider>
      </Box>
    </>
  );
}
