<script setup lang="ts">
defineProps({
  title: {
    type: String,
    required: true,
  },
  link: {
    type: String,
    required: false,
    default: '/',
  },
})
</script>

<template>
  <header
    class="flex flex-row align-center justify-between border-b border-b-4 border-slate-500 p-8 bg-slate-950 items-center"
  >
    <h1 class="text-xl mb-4 md:mb-0">
      {{ title }}
    </h1>
    <nuxt-link :to="link" class="ml-0 md:ml-auto">
      Go back
    </nuxt-link>
  </header>
</template>
