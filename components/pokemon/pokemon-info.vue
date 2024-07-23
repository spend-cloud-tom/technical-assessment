<script setup lang="ts">
const props = defineProps<{
  name: string
}>()

const { data } = usePokemonData<Pokemon>(`pokemon/${props.name}`)

// const { addPokemon } = usePokeballStore()

// function onClick() {
//   if (data.value)
//     addPokemon(data.value!)
// }

const stats = computed(() => ({
  ...(data.value?.height && { height: data.value.height }),
  ...(data.value?.species && { weight: data.value.weight }),
}))
</script>

<template>
  <character-info
    v-if="data"
    :name="data.name"
    :image-src="data.sprites.front_default"
    :stats="stats"
  />
</template>
