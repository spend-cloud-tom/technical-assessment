import { defineStore } from 'pinia'

export const useListToggleStore = defineStore('listViewToggle', {
  state: () => ({
    isListView: false,
  }),
  actions: {
    setIsListView(isListView: boolean) {
      this.isListView = isListView
    },
  },
})
