<script setup lang="ts">
import type { RickAndMortyCharacter } from '~/types/rick-and-morty'

const props = defineProps<{
  id: number
}>()
const { data } = useRickAndMortyData<RickAndMortyCharacter>(`character/${props.id}`)

const stats = computed(() => ({
  ...(data.value?.gender && { gender: data.value.gender }),
  ...(data.value?.species && { species: data.value.species }),
  ...(data.value?.type && { type: data.value.type }),
}))
</script>

<template>
  <character-list-item
    v-if="data"
    :id="id"
    :name="data.name"
    :image-src="data.image"
    :stats="stats"
  />
</template>
