import React from 'react';
import Document, { Head, Html, Main, NextScript } from 'next/document';

class MyDocument extends Document {
  static async getInitialProps(ctx) {
    const initialProps = await Document.getInitialProps(ctx);
    return { ...initialProps };
  }

  render() {
    return (
      <Html lang="en">
        <Head>
          {/* eslint-disable-next-line @next/next/no-sync-scripts */}
          <script
            src={`https://www.google.com/recaptcha/api.js?render=${
              process.env.NODE_ENV !== 'production'
                ? process.env.NEXT_PUBLIC_RECAPTCHA_LOCAL
                : process.env.NEXT_PUBLIC__RECAPTCHA_PROD
            }`}
          />
          <script
            async
            src={`https://www.googletagmanager.com/gtag/js?id=${process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS}`}
          />
          <script
            // eslint-disable-next-line jam3/no-sanitizer-with-danger
            dangerouslySetInnerHTML={{
              __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', '${process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS}', {
              page_path: window.location.pathname,
            });
            `
            }}
          />
        </Head>

        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
