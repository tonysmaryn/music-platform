import { AppProps } from 'next/app';
import React from 'react';
import { wrapper } from '../store/store';

const WrappedApp: React.FC<AppProps> = ({ Component, pageProps }) => (
  <Component {...pageProps} />
);

export default wrapper.withRedux(WrappedApp);
