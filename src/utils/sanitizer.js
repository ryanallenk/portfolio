import xss from 'xss';

/**
 * DOM Sanitizer to protect against untrust inputs and XSS attacks
 *
 * @param {string} [dirtyInput=''] - Input to sanitize
 */
function sanitizer(dirtyInput, ...options) {
  const whitelist = xss.whiteList;
  whitelist.strike = '';
  return xss(dirtyInput, options);
}

export default sanitizer;
