<script setup lang="ts">
const { data, fetchNextPage, hasNextPage } = usePokemonList()
</script>

<template>
  <article>
    <header
      class="flex align-center justify-center border-b-4 border-slate-500 p-8 bg-slate-950 items-center"
    >
      <h1 class="text-xl">
        Pokemon
      </h1>
      <nuxt-link to="/" class="ml-auto">
        Go back to the home page
      </nuxt-link>
    </header>
    <main>
      <character-list-view :data="data" :has-next-page="hasNextPage" @fetch-next-page="fetchNextPage">
        <template #item="{ item }">
          <pokemon-info :name="item.name" />
        </template>
      </character-list-view>
    </main>
  </article>
</template>
