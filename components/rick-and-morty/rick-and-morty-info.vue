<script setup lang="ts">
const props = defineProps<{
  id: number
}>()

interface CharacterT {
  name: string
  image: string
  gender: string
  species: string
  type: string
}

const { data } = useRickAndMortyData<CharacterT>(`character/${props.id}`)
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
