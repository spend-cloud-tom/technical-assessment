<script setup lang="ts">
defineProps({
  message: {
    type: string,
    required: false,
    default: '',
  },
})
</script>

<template>
  <div class="text-gray-500 text-center mt-4">
    <p>{{ message }}</p>
  </div>
</template>
