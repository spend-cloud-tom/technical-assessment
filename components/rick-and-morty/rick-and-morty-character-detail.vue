<script setup lang="ts">
const props = defineProps<{
  id: number
}>()

const { data } = useRickAndMortyData<RickAndMortyCharacter>(`character/${props.id}`)
</script>

<template>
  <article v-if="data" class="border-4 flex rounded-lg">
    <NuxtImg class="image" :src="data.image" />
    <header class="p-2  flex items-center">
      <h2 class="font-bold text-lg capitalize text-blue-300">
        {{ data.name }}
      </h2>
    </header>
    <div class="p-2">
      <p>Species: {{ data.species }}</p>
    </div>
    <footer class="flex p-2" />
  </article>
</template>
