<script setup>
setPageTitle('Home')
</script>

<template>
  <div>
    <nuxt-link to="/pokemon" class="flex">
      Check out all the Pokemon!
    </nuxt-link>
    <nuxt-link to="/rick-and-morty">
      <div class="mt-4">
        Check out Rick and Morty!
      </div>
    </nuxt-link>
  </div>
</template>
