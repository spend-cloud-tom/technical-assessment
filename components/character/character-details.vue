<script setup lang="ts">
defineProps<{
  name: string
  imageSrc: string
  stats?: Record<string, string | number>
  id: number
}>()
</script>

<template>
  <div class="max-w-80 m-auto mt-8">
    <div class="border-4 border-pink-600 flex flex-col rounded-lg bg-slate-800">
      <CharacterImage
        v-if="$props.imageSrc"
        :image-src="$props.imageSrc"
      />
      <header class="p-2  flex items-center bg-pink-950 border-b-4 border-pink-600">
        <Icon name="ph:lightning-fill" class="mr-2 text-xl text-pink-700" />
        <h2 class="font-bold text-lg capitalize text-pink-700">
          <span v-if="!$props.name">...</span>
          <span v-else>

            {{ $props.name }}
          </span>
        </h2>
      </header>
      <div class="p-2">
        <p v-for="(value, key) in $props.stats" :key="key">
          <span class="font-medium">{{ key }}:</span>
          <span class="ml-1">{{ value }}</span>
        </p>
      </div>
    </div>
  </div>
</template>
