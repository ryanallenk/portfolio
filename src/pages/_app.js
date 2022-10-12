import React, { useEffect } from 'react';
import { apiPlugin, storyblokInit } from '@storyblok/react';
import 'normalize.css';

import '@/styles/global.scss';

import Layout from '@/components/Layout/Layout';

import gsapInit from '@/utils/gsap';

import storyblokComponents from '@/lib/storyblok/storyblok-components';

storyblokInit({
  accessToken: process.env.NEXT_PUBLIC_STORYBLOK_PREVIEW_KEY,
  use: [apiPlugin],
  components: storyblokComponents,
  apiOptions: {
    region: 'us' // Pass this key/value if your space was created under US region
  }
});

if (typeof window !== 'undefined') {
  require('default-passive-events');
  require('focus-visible');
  gsapInit();
}

function App({ Component, pageProps }) {
  useEffect(() => {
    if (typeof window !== 'undefined') {
      if (process.env.NODE_ENV !== 'production' && window.location.href.indexOf('?nostat') === -1) {
        require('@jam3/stats')();
      }
    }
  }, []);

  return (
    <>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </>
  );
}

export default App;
