/**
 * Retrieves a numeric query parameter from a given URL.
 *
 * @param {string} url - The URL to parse.
 * @param {string} paramName - The name of the query parameter to retrieve.
 * @returns {number | null} The value of the query parameter as a number, or null if not found or not a number.
 */
export function getNumericQueryParam(url: string, paramName: string) {
  const parsedUrl = new URL(url)
  const paramValue = parsedUrl.searchParams.get(paramName) ?? null
  return paramValue ? Number.parseFloat(paramValue) : null
}
