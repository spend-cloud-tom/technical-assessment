<script setup lang="ts">
const props = defineProps<{
  imageSrc: string
}>()
</script>

<template>
  <NuxtImg class="image" :src="props.imageSrc" :placeholder="[50, 25, 75, 5]" />
</template>

<style scoped>
.image {
  image-rendering: pixelated;
}
</style>
