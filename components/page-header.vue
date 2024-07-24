<script setup lang="ts">
import { useListToggleStore } from '../stores/list-toggle'

const listToggleStore = useListToggleStore()

function toggleView() {
  listToggleStore.setIsListView(!listToggleStore.isListView)
}
</script>

<template>
  <header
    class="flex align-center justify-center border-b-4 border-slate-500 p-8 bg-slate-950 items-center"
  >
    <nuxt-link to="/" class="mr-auto flex items-center">
      <Icon name="mdi:arrow-left-bold-circle" class="text-xl mr-2" />
      Go Home
    </nuxt-link>
    <div>
      <input id="toggleList" :checked="listToggleStore.isListView" type="checkbox" class="hidden" @change="toggleView">
      <label for="toggleList" class="p-2 rounded-md border-gray-100 border-2 cursor-pointer">
        Toggle {{ listToggleStore.isListView ? "grid" : "list" }} view
      </label>
    </div>
  </header>
</template>
