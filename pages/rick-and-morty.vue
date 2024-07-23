<script setup lang="ts">
const { data, fetchNextPage, hasNextPage } = useRickAndMortyList()
</script>

<template>
  <article>
    <header
      class="flex align-center justify-center border-b-4 border-slate-500 p-8 bg-slate-950 items-center"
    >
      <h1 class="text-xl">
        Rick and Morty
      </h1>
      <nuxt-link to="/" class="ml-auto">
        Go back to the home page
      </nuxt-link>
    </header>
    <main>
      <character-list-view v-if="data" :data="data" :has-next-page="hasNextPage" @fetch-next-page="fetchNextPage">
        <template #item="{ item }">
          <rick-and-morty-info :id="item.id" />
        </template>
      </character-list-view>
    </main>
  </article>
</template>
