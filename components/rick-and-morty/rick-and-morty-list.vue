<script setup lang="ts">
/**
 * RickAndMortyList Component
 */
import { OverviewLayout } from '~/types'
import useRickAndMortyCharacterList from '~/composables/useRickAndMortyCharacter'
// import { mutateRickAndMortyApiData } from "~/components/rick-and-morty/utils";

const searchQuery = ref<string>('')

const { data: apiData, isLoading, isLoadingError, isError, fetchNextPage, hasNextPage, refetch } = useRickAndMortyCharacterList(searchQuery)
const { overviewLayout, handleOverviewLayoutSwitch } = useOverviewLayout()

/**
 * Mutates ApiData to get data that fits the Overview Component --> <overview :data={data}>
 * TODO: Unfortunately due to time and weird Typed InfiniteQuery this is not completed...
 */
// const data = computed(() => mutateRickAndMortyApiData(data))

function handleSearch(event: Event) {
  searchQuery.value = (event.currentTarget as HTMLInputElement).value

  refetch()
}

const overviewClasses = computed(() => ({
  list: overviewLayout.value === OverviewLayout.Grid ? 'flex gap-8 flex-wrap' : '',
  item: overviewLayout.value === OverviewLayout.Grid ? 'w-[25ch]' : 'mb-4 last-of-type:mb-0',
}))
</script>

<template>
  <section class="p-4">
    <template v-if="isLoading">
      Loading content...
    </template>

    <template v-if="isLoadingError || isError">
      Could not get data. Please try again later.
    </template>

    <template v-if="apiData">
      <div class="flex items-center gap-4 mb-5">
        <input type="search" :value="searchQuery" class="w-full p-2 border border-gray-300 rounded-lg" placeholder="Search..." @input="handleSearch">
        <overview-layout-switcher @on-change="handleOverviewLayoutSwitch" />
      </div>

      <!-- NOT COMPLETED -->
      <!-- <overview-list items="data"> -->

      <ul :class="overviewClasses.list">
        <template v-for="page in apiData.pages" :key="page.info.next ? page.info.next : 'last-rick-and-morty-character'">
          <li v-for="character in page.results" :key="`rick-and-morty-${character.name}-${character.id}`" :class="overviewClasses.item">
            <NuxtLink :to="`rick-and-morty/${character.id}`">
              <rick-and-morty-item :id="character.id" :overview-layout="overviewLayout" />
            </NuxtLink>
          </li>
        </template>
      </ul>

      <div class="flex items-center justify-center p-20">
        <UButton :disabled="!hasNextPage" size="xl" @click="fetchNextPage">
          Load more
        </UButton>
      </div>
    </template>
  </section>
</template>
