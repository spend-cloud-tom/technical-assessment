<script setup lang="ts">
const props = defineProps<{
  name: string
  imageSrc: string
  stats?: Record<string, string | number>
}>()

const store = useListToggleStore()
</script>

<template>
  <div
    class="flex bg-slate-800 transition-colors duration-200 hover:bg-slate-700"
    :class="[
      store.isListView
        ? 'flex-col sm:flex-row items-start sm:items-center border-b border-slate-700'
        : 'flex-col border-4 border-pink-600 rounded-lg',
    ]"
  >
    <character-image
      v-if="props.imageSrc"
      :image-src="props.imageSrc"
      :class="[
        store.isListView
          ? 'w-full sm:w-16 h-32 sm:h-16 object-contain'
          : 'w-full h-[23ch] object-cover',
      ]"
    />

    <div
      v-if="props.stats"
      class="flex-grow w-full"
      :class="[
        store.isListView ? 'flex flex-col sm:flex-row sm:items-center' : 'block',
      ]"
    >
      <header
        class="flex-shrink-0"
        :class="[
          store.isListView
            ? 'w-full sm:w-1/4 p-4'
            : 'flex items-center border-b-4 border-pink-600 bg-pink-950 p-2',
        ]"
      >
        <h2 class="text-xl font-semibold">
          {{ props.name }}
        </h2>
      </header>
      <div
        :class="[
          store.isListView
            ? 'flex-grow w-full sm:w-3/4 flex flex-wrap items-center'
            : 'block',
        ]"
      >
        <p
          v-for="(value, key) in props.stats"
          :key="key"
          class="px-4 py-2"
          :class="store.isListView ? 'w-full sm:w-auto' : 'block'"
        >
          <span class="font-medium">{{ key }}:</span>
          <span class="ml-1">{{ value }}</span>
        </p>
      </div>
    </div>
  </div>
</template>
