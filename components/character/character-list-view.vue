<script setup lang="ts">
import { useListToggleStore } from '../../stores/list-toggle'

const props = defineProps<{
  data?: {
    pages: Array<{
      results: Array<{
        name: string
        id: number
      }>
    }>
  }
  hasNextPage: boolean
}>()

const emit = defineEmits(['fetchNextPage'])

function handleFetchNextPage() {
  emit('fetchNextPage')
}

const allItems = computed(() => {
  if (!props.data)
    return []
  return props.data.pages.flatMap(page => page.results)
})

const listToggleStore = useListToggleStore()
</script>

<template>
  <div v-if="data">
    <ul :class="listToggleStore.isListView ? 'gap-2' : 'gap-8'" class="flex flex-wrap p-4">
      <li
        v-for="item in allItems" :key="item.name" :class="listToggleStore.isListView ? 'w-full' : 'w-[25ch]'"
      >
        <slot name="item" :item="item" />
      </li>
    </ul>
    <div class="flex items-center justify-center p-20">
      <UButton :disabled="!hasNextPage" size="xl" @click="handleFetchNextPage">
        Load more
      </UButton>
    </div>
  </div>
</template>
