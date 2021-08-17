import { Container } from '@material-ui/core';
import React from 'react';
import Navbar from '../components/Navbar';
import Player from '../components/Player';
import Head from 'next/head';

interface MainLayoutProps {
  title?: string;
  description?: string;
  keywords?: string;
}

const MainLayout: React.FC<MainLayoutProps> = ({
  title,
  description,
  keywords,
  children,
}) => {
  return (
    <>
      <Head>
        <title>{title || 'Музыкальная платформа'}</title>
        <meta name="description" content={description} />
        <meta name="robots" content="index, follow" />
        <meta name="keywords" content={keywords} />
        <meta name="viewport" content="width-device-width, initial-scale=1" />
      </Head>
      <Navbar />
      <Container style={{ margin: '90px 0' }}>{children}</Container>
      <Player />
    </>
  );
};

export default MainLayout;
