<script setup lang="ts">
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
  <character-info
    v-if="data"
    :name="data.name"
    :image-src="data.image"
    :stats="stats"
  />
</template>
