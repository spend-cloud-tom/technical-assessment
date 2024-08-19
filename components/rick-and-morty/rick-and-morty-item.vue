<script setup lang="ts">
import type { RickAndMortyCharacter } from '~/types'
import { OverviewLayout } from '~/types'

const props = defineProps<{
  id: number
  overviewLayout: OverviewLayout
}>()

const { data } = useRickAndMortyData<RickAndMortyCharacter>(`character/${props.id}`)
const layoutClasses = computed(() => props.overviewLayout === OverviewLayout.Grid ? 'border-4 flex flex-col rounded-lg' : 'border-4 flex rounded-lg gap-1')
</script>

<template>
  <template v-if="data">
    <article :class="layoutClasses">
      <NuxtImg class="image" :src="data.image" />
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
