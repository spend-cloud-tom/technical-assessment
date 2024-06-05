<script setup lang="ts">
import { useRoute } from 'vue-router'
import { onMounted, ref } from 'vue'
import axios from 'axios'

const route = useRoute()
const characterId = route.params.id
const { data, isLoading, error } = useRickAndMortyCharacter(characterId)
</script>

<template>
  <div class="max-w-4xl mx-auto p-4">
    <div v-if="data" class="bg-gray-800 p-6 rounded-lg shadow-lg">
      <img :src="data.image" alt="character image" class="w-full max-w-xs h-auto rounded-lg mb-4 mx-auto">
      <div v-if="data">
        <RickAndMortyInfo :character="data" :is-detail-view="true" />
      </div>

      <h1 class="text-3xl font-bold text-white mb-2">
        {{ data.name }}
      </h1>
      <div class="grid grid-cols-2 gap-4">
        <div>
          <p class="text-gray-300 mb-1">
            Species: {{ data.species }}
          </p>
          <p class="text-gray-300 mb-1">
            Gender: {{ data.gender }}
          </p>
          <p class="text-gray-300 mb-1">
            Location: {{ data.location.name }}
          </p>
        </div>
        <div>
          <p class="text-gray-300 mb-1">
            Status: {{ data.status }}
          </p>
          <p class="text-gray-300 mb-1">
            Origin: {{ data.origin.name }}
          </p>
        </div>
      </div>
    </div>
    <loading v-if="isLoading" />
    <error v-if="error" :message="error.message" />
  </div>
</template>
