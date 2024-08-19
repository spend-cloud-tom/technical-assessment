<script lang="ts" setup>
const route = useRoute()
</script>

<template>
  <nav class="flex items-center justify-between flex-wrap bg-teal-500 p-6">
    <div class="flex items-center flex-shrink-0 text-white mr-6">
      <span class="font-semibold text-xl tracking-tight">Famous Cartoons</span>
    </div>
    <!-- Only show when on Pokemon page -->
    <div v-if="route.name === 'pokemon'" class="w-full block flex-grow lg:flex lg:items-center lg:w-auto">
      <div class="ml-auto">
        <a href="#" class="inline-block text-sm px-4 py-2 leading-none border rounded text-white border-white hover:border-transparent hover:text-teal-500 hover:bg-white mt-4 lg:mt-0">
          <Icon name="mdi:pokeball" class="mr-2 text-xl" />
          <span>Pokebal</span>
        </a>
      </div>
    </div>
  </nav>
</template>
