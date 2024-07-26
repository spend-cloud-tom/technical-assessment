<script setup lang="ts">
onMounted(() => {
  setPageTitle('Pokemon')
})

const { data, fetchNextPage, hasNextPage } = usePokemonList()

const formattedData = computed(() => {
  return {
    pages: data.value?.pages.map(page => ({
      results: page.results.map(item => ({
        name: item.name,
        id: Number.parseInt(item.url.split('/').slice(-2)[0]),
      })),
    })) || [],
  }
})
</script>

<template>
  <article>
    <page-header />
    <main>
      <character-list-view :data="formattedData" :has-next-page="hasNextPage" @fetch-next-page="fetchNextPage">
        <template #item="{ item }">
          <pokemon-info :id="item.id" :name="item.name" />
        </template>
      </character-list-view>
    </main>
  </article>
</template>
