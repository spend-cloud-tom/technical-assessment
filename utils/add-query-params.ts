/**
 * Adds query parameters to a URL.
 *
 * @param {string} url - The base URL.
 * @param {{string: string}} params - An object with key-value pairs of query parameters.
 * @returns {string} The URL with the added query parameters.
 */
export function addQueryParams(url: string, params: { [key: string]: string | number }): string {
  const queryParams = Object.keys(params).map(key => `${key}=${encodeURIComponent(params[key])}`).join('&')
  return `${url}${url.includes('?') ? '&' : '?'}${queryParams}`
}
