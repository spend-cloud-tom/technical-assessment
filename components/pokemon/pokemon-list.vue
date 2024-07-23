<script setup lang="ts">
const { data, fetchNextPage, hasNextPage } = usePokemonList()
</script>

<template>
  <character-list-view :data="data" :has-next-page="hasNextPage" @fetch-next-page="fetchNextPage">
    <template #item="{ item }">
      <pokemon-info :name="item.name" />
    </template>
  </character-list-view>
</template>
