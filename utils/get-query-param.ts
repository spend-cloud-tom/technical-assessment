export function getNumericQueryParam(url: string, paramName: string) {
  const parsedUrl = new URL(url)
  const paramValue = parsedUrl.searchParams.get(paramName) ?? null
  return paramValue ? Number.parseFloat(paramValue) : null
}
