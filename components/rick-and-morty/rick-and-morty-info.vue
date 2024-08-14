<script setup lang="ts">
import { Layout } from '~/components/rick-and-morty/types'

const props = defineProps<{
  id: number
  layout: Layout
}>()

const { data } = useRickAndMortyData<RickAndMortyCharacter>(`character/${props.id}`)
</script>

<template>
  <template v-if="data">
    <article v-if="props.layout === Layout.Grid" class="border-4 flex flex-col rounded-lg">
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
    <article v-else class="border-4 flex rounded-lg gap-1">
      <NuxtImg class="image max-w-20" :src="data.image" />
      <div>
        <header class="p-2  flex items-center">
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
  <template v-else>
    Character not found...
  </template>
</template>
