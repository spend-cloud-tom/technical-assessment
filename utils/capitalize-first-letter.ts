/**
 * Capitalizes the first letter of a given string.
 * @param {string} str - The string to capitalize.
 * @return {string} The string with the first letter capitalized.
 */
export function capitalizeFirstLetter(str: string) {
  return str.charAt(0).toUpperCase() + str.slice(1)
}
