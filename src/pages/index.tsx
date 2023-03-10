import Head from 'next/head';

import { useSnackbar } from '@/components/contexts/SnackbarContext';
import Box from '@/components/mui/Box';
import Button from '@/components/mui/Button';

export default function Home() {
  const { showSuccess, showInfo, showError } = useSnackbar();

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
      <Box sx={{ width: '100vw', height: '100vh', backgroundColor: '#f0f3fd' }}>
        <Button onClick={() => showSuccess('成功しました')}>Success</Button>
        <Button onClick={() => showInfo('通知です')}>Info</Button>
        <Button onClick={() => showError('失敗しました')}>Error</Button>
      </Box>
    </>
  );
}
