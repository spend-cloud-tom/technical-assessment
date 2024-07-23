<script setup lang="ts">
const props = defineProps<{
  name: string
  imageSrc: string
  stats?: Record<string, string | number>
}>()
</script>

<template>
  <div class="border-4 border-pink-600 flex flex-col rounded-lg bg-slate-800">
    <header
      class="p-2 flex items-center bg-pink-950 border-b-4 border-pink-600"
    >
      <p>{{ props.name }}</p>
    </header>
    <div class="h-[23ch] p-2">
      <character-image v-if="props.imageSrc" :image-src="props.imageSrc" class="w-full" />
    </div>
    <div class="p-2">
      <template v-if="props.stats">
        <p v-for="(key, value) in props.stats" :key="value">
          {{ key }}: <span>{{ value }}</span>
        </p>
      </template>
    </div>
    <!-- <footer class="flex p-2">
      <UButton class="ml-auto" :disabled="!data" @click="onClick">
        Add pokemon
      </UButton>
    </footer> -->
  </div>
</template>
