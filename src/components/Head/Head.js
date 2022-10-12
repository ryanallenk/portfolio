import { memo } from 'react';
import NextHead from 'next/head';
import { useRouter } from 'next/router';

import { siteName, siteSlogan } from '@/data/settings';

const TITLE_SEPARATOR = '|';

function Head({ title, description, keywords, og_title, og_description, og_image }) {
  const router = useRouter();

  const ogUrl = `${process.env.NEXT_PUBLIC_SITE_URL}${router.asPath.substring(1)}`;
  const fullTitle =
    title && title !== '' ? `${title} ${TITLE_SEPARATOR} ${siteName}` : `${siteName} ${TITLE_SEPARATOR} ${siteSlogan}`;
  const ogTitle = og_title ?? fullTitle;
  const ogDescription = og_description ?? description;

  return (
    <NextHead>
      <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no" />
      <title>{title !== siteName ? fullTitle : title}</title>
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords.join()} />
      <meta name="theme-color" content="#ffffff" />
      <meta name="msapplication-TileColor" content="#ffffff" />
      <link rel="apple-touch-icon" sizes="180x180" href="/favicons/apple-touch-icon.png" />
      <link rel="icon" type="image/png" sizes="32x32" href="/favicons/favicon-32x32.png" />
      <link rel="icon" type="image/png" sizes="16x16" href="/favicons/favicon-16x16.png" />
      <link rel="manifest" href="/favicons/site.webmanifest" />
      <link rel="mask-icon" href="/favicons/safari-pinned-tab.svg" color="#000000" />
      <link rel="shortcut icon" href="/favicons/favicon.ico" />
      <meta name="msapplication-config" content="/favicons/browserconfig.xml" />
      {/* Share meta tags */}
      <meta property="og:locale" content="en_US" />
      <meta property="og:title" content={ogTitle} />
      <meta property="og:description" content={ogDescription} />
      <meta property="og:type" content="website" />
      <meta property="og:url" content={ogUrl} />
      <meta property="og:site_name" content={siteName} />
      <meta property="og:image:width" content="1200" />
      <meta property="og:image:height" content="630" />
      <meta property="og:image" content={og_image} />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:image" content={og_image} />
      <meta name="twitter:title" content={ogTitle} />
      <meta name="twitter:description" content={ogDescription} />
      <meta name="twitter:site:id" content="@TWITTER_HERE" />
      <meta property="fb:app_id" content="FB_APP_ID" />
      <meta name="google-site-verification" content="[Google Web Master Tools]" />
      <meta name="msvalidate.01" content="[Bing Web Master Tools]" />
      {/* Other recommends */}
      <link rel="canonical" href={ogUrl} />
      {process.env.NEXT_PUBLIC_DNS_PREFETCH && <link rel="dns-prefetch" href={process.env.NEXT_PUBLIC_DNS_PREFETCH} />}
    </NextHead>
  );
}

Head.defaultProps = {
  description: 'Default Description.',
  og_image: `${process.env.NEXT_PUBLIC_SITE_URL}assets/images/share-image.png`,
  keywords: ['']
};

export default memo(Head);
