<script setup lang="ts">
import { ListBulletIcon, Squares2X2Icon } from '@heroicons/vue/24/solid'
import useRickAndMortyCharacterList from '~/composables/useRickAndMortyCharacter'
import { Layout } from '~/components/rick-and-morty/types'

const searchQuery = ref<string>('Mr. Poopybutthole')

const { data, fetchNextPage, hasNextPage, refetch } = useRickAndMortyCharacterList(searchQuery)

const layout = ref<Layout>(Layout.Grid)

function handleLayout(val: Layout) {
  layout.value = val
}

function handleSearch(event: InputEvent) {
  searchQuery.value = (event.currentTarget as HTMLInputElement).value

  refetch()
}

const layoutClass = computed(() => layout.value === Layout.Grid ? 'flex gap-8 flex-wrap' : '')
const layoutItemClass = computed(() => layout.value === Layout.Grid ? 'w-[25ch]' : 'mb-2')
</script>

<template>
  <div v-if="data" class="p-4">
    <div class="flex items-center gap-4 mb-5">
      <input type="search" :value="searchQuery" class="w-full p-2 border border-gray-300 rounded-lg" placeholder="Search..." @input="handleSearch">
      <nav>
        <ul class="flex justify-end gap-2">
          <li><a href="#" @click="handleLayout(Layout.Grid)"><Squares2X2Icon class="size-6" /></a></li>
          <li><a href="#" @click="handleLayout(Layout.List)"><ListBulletIcon class="size-6" /></a></li>
        </ul>
      </nav>
    </div>
    <ul v-for="page in data.pages" :key="page.info.next ? page.info.next : 'last-rick-and-morty-character-list-page'" :class="layoutClass">
      <li v-for="character in page.results" :key="character.id" :class="layoutItemClass">
        <NuxtLink :to="`rick-and-morty/${character.id}`">
          <rick-and-morty-info :id="character.id" :layout="layout" />
        </nuxtlink>
      </li>
    </ul>
    <div class="flex items-center justify-center p-20">
      <UButton :disabled="!hasNextPage" size="xl" @click="fetchNextPage">
        Load more
      </UButton>
    </div>
  </div>
</template>
