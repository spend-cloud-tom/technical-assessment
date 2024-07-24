<template>
  <nav class="flex items-center justify-between flex-wrap bg-teal-500 p-6">
    <div class="flex items-center flex-shrink-0 text-white mr-6">
      <span class="font-semibold text-xl tracking-tight">Character browser</span>
    </div>

    <div class="flex gap-4">
      <nuxt-link to="/pokemon" class="flex" active-class="underline">
        Pokemon
      </nuxt-link>
      <nuxt-link to="/rick-and-morty" class="flex" active-class="underline">
        Rick and Morty
      </nuxt-link>
    </div>
  </nav>
</template>
