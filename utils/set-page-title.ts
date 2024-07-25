/**
 * Sets the page title using the app title store.
 * @param {string} title - The title to set for the page.
 */
export function setPageTitle(title: string) {
  const appTitleStore = useAppTitleStore()
  appTitleStore.setPageTitle(title)
}
