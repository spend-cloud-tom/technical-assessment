<script setup lang="ts">
import type { RickAndMortyCharacter } from '~/types'

const props = defineProps<{
  id: number
}>()

const { data } = useRickAndMortyData<RickAndMortyCharacter>(`character/${props.id}`)
</script>

<template>
  <article v-if="data" class="flex items-center gap-10 p-6">
    <NuxtImg class="image" :src="data.image" />
    <div>
      <header class="p-2">
        <h2 class="font-bold text-lg capitalize text-blue-300">
          {{ data.name }}
        </h2>
      </header>
      <div class="p-2">
        <p>Species: {{ data.species }}</p>
      </div>
    </div>
  </article>
</template>
