<script setup lang="ts">
import { ref } from 'vue'
import { useRouter } from 'vue-router'

const { data, fetchNextPage, hasNextPage, isLoading, error } = useRickAndMortyList()
const router = useRouter()

const viewMode = ref('grid')
const searchQuery = ref('')

function toggleViewMode() {
  viewMode.value = viewMode.value === 'grid' ? 'list' : 'grid'
}

function goToCharacterDetails(id) {
  router.push(`/rick-and-morty/${id}`)
}

const filteredData = computed(() => {
  if (!data.value)
    return []
  const query = searchQuery.value.toLowerCase()
  return data.value.pages.map(page => ({
    ...page,
    results: page.results.filter(character =>
      character.name.toLowerCase().includes(query),
    ),
  }))
})

const showLoadMoreButton = computed(() => {
  const query = searchQuery.value.toLowerCase()
  if (query) {
    // Check if any of the filtered pages have more characters to load
    return filteredData.value.some(page => page.results.length > 0) && hasNextPage.value
  }
  return hasNextPage.value
})

const hasNoResults = computed(() => {
  return searchQuery.value && filteredData.value.every(page => page.results.length === 0)
})
</script>

<template>
  <div v-if="data">
    <div class="flex justify-between p-4">
      <input
        v-model="searchQuery" type="text" placeholder="Search characters by name"
        class="border rounded px-4 py-2 ml-6 w-1/2"
      >
      <button class="bg-blue-500 text-white px-4 py-2 rounded" @click="toggleViewMode">
        Toggle to {{ viewMode === 'grid' ? 'List' : 'Grid' }} View
      </button>
    </div>
    <div v-if="hasNoResults" class="text-gray-500 text-center mt-4">
      <p>No results found</p>
    </div>
    <ul
      v-for="page in filteredData" :key="page.info.next"
      :class="viewMode === 'grid' ? 'flex gap-8 flex-wrap p-4' : 'list-view p-4'"
    >
      <li
        v-for="character in page.results" :key="character.id"
        :class="viewMode === 'grid' ? 'w-[25ch]' : 'w-full border-b border-gray-700 py-4'" class="cursor-pointer"
        @click="goToCharacterDetails(character.id)"
      >
        <div :class="viewMode === 'grid' ? '' : 'flex items-center space-x-4'">
          <img :src="character.image" alt="" :class="viewMode === 'grid' ? 'w-full h-auto' : 'w-20 h-20 rounded-full'">
          <div :class="viewMode === 'grid' ? 'mt-2 text-center' : 'ml-4'">
            <h3>{{ character.name }}</h3>
            <p>{{ character.species }}</p>
          </div>
        </div>
      </li>
    </ul>
    <div v-if="showLoadMoreButton" class="flex items-center justify-center p-20">
      <button
        :disabled="!hasNextPage" size="xl" class="bg-blue-500 text-white px-4 py-2 rounded"
        @click="fetchNextPage"
      >
        Load more
      </button>
    </div>
  </div>
  <loading v-if="isLoading" />
  <error v-else-if="error" :message="error.message" />
</template>

<style scoped>
.list-view > li {
  display: flex;
  align-items: center;
  padding: 1rem 0;
}
</style>
