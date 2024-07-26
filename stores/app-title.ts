export const useAppTitleStore = defineStore('appTitle', {
  state: () => ({
    pageTitle: 'Home',
  }),
  actions: {
    setPageTitle(newTitle: string) {
      this.pageTitle = newTitle
    },
  },
})
