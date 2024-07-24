export function setPageTitle(title: string) {
  const appTitleStore = useAppTitleStore()
  appTitleStore.setPageTitle(title)
}
