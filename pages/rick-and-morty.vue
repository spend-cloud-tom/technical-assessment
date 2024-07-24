<script setup lang="ts">
setPageTitle('Rick and Morty')
const { data, fetchNextPage, hasNextPage } = useRickAndMortyList()

const formattedData = computed(() => {
  return data.value
    ? {
        pages: data.value.pages.map(page => ({
          results: page.results.map(character => ({
            name: character.name,
            id: character.id,
          })),
        })),
      }
    : { pages: [] }
})
</script>

<template>
  <article>
    <page-header />
    <main>
      <character-list-view :data="formattedData" :has-next-page="hasNextPage" key-prop="name" @fetch-next-page="fetchNextPage">
        <template #item="{ item }">
          <rick-and-morty-info :id="item.id" />
        </template>
      </character-list-view>
    </main>
  </article>
</template>
