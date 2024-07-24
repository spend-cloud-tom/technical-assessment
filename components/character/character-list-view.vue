<script setup lang="ts">
defineProps<{
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

const listToggleStore = useListToggleStore()
</script>

<template>
  <div v-if="data">
    <ul v-for="page in data.pages" :key="page.results[0].id" :class="listToggleStore.isListView ? 'gap-2' : 'gap-8'" class="flex flex-wrap p-4">
      <li
        v-for="item in page.results" :key="item.name" :class="listToggleStore.isListView ? 'w-full' : 'w-[25ch]'"
      >
        <slot name="item" :item="item" />
      </li>
    </ul>
    <div class="flex items-center justify-center p-20">
      <u-button :disabled="!hasNextPage" size="xl" @click="handleFetchNextPage">
        Load more
      </u-button>
    </div>
  </div>
</template>
