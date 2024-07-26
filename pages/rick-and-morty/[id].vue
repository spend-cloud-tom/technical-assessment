<script setup lang="ts">
import type { RickAndMortyCharacter } from '~/types/rick-and-morty'

const route = useRoute() as { params: { id: string } } // Probably a better way to do this
const { data } = useRickAndMortyData<RickAndMortyCharacter>(`character/${route.params.id}`)

const stats = computed(() => ({
  ...(data.value?.gender && { gender: data.value.gender }),
  ...(data.value?.species && { species: data.value.species }),
  ...(data.value?.type && { type: data.value.type }),
}))
</script>

<template>
  <article>
    <PageHeader />
    <p v-if="data">
      <CharacterDetails
        :id="data.id"
        :name="data.name"
        :image-src="data.image"
        :stats="stats"
      />
    </p>
  </article>
</template>
