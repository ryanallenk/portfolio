// Log the pageview with URL
export const pageview = (url) => {
  window.gtag('config', process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS, {
    page_path: url
  });
};

/**
 * Dispatch an event with GTM
 *
 * @param {string} [action] - Action name
 * @param {any} [params] - Action data
 */
export const event = (action, params) => {
  window.gtag('event', action, params);
};
