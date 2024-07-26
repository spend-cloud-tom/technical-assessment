<script setup lang="ts">
const route = useRoute() as { params: { id: string } }
const { data } = usePokemonData<Pokemon>(`pokemon/${route.params.id}`)

const stats = computed(() => ({
  ...(data.value?.height && { height: data.value.height }),
  ...(data.value?.species && { weight: data.value.weight }),
}))
</script>

<template>
  <article>
    <PageHeader />
    <p v-if="data">
      <CharacterDetails
        :id="data.id"
        :name="data.name"
        :image-src="data.sprites.front_default"
        :stats="stats"
      />
    </p>
  </article>
</template>
