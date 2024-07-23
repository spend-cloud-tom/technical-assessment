<script setup lang="ts">
import type { PropType } from 'vue'

defineProps({
  data: {
    type: Object as PropType<any>,
    required: false,
  },
  hasNextPage: {
    type: Boolean,
    required: true,
  },
})

const emit = defineEmits(['fetchNextPage'])

function handleFetchNextPage() {
  emit('fetchNextPage')
}
</script>

<template>
  <div v-if="data">
    <ul v-for="page in data.pages" :key="page" class="flex gap-8 flex-wrap p-4">
      <li v-for="item in page.results" :key="item.name" class="w-[25ch]">
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
