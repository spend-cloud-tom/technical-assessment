<script setup lang="ts">
const props = defineProps<{
  name: string
  id: number
}>()

const { data } = usePokemonData<Pokemon>(`pokemon/${props.name}`)

const stats = computed(() => ({
  ...(data.value?.height && { height: data.value.height }),
  ...(data.value?.species && { weight: data.value.weight }),
}))
</script>

<template>
  <CharacterListItem
    v-if="data"
    :id="id"
    :name="data.name"
    :image-src="data.sprites.front_default"
    :stats="stats"
  />
</template>
