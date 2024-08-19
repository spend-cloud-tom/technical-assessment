<script lang="ts" setup>
/**
 * OverviewDetail Component
 * @item: OverviewItem
 * @overviewLayout: OverviewLayout
 */
import type { OverviewItem } from '~/types.js'
import { OverviewLayout } from '~/types.js'

const props = defineProps<{
  item: OverviewItem
  overviewLayout: OverviewLayout
}>()

const layoutClasses = computed(() => props.overviewLayout === OverviewLayout.Grid ? 'border-4 flex flex-col rounded-lg' : 'border-4 flex rounded-lg gap-1')
</script>

<template>
  <article :class="layoutClasses">
    <NuxtImg class="image" :src="item.image" />
    <div>
      <header class="p-2  flex items-center">
        <h2 class="font-bold text-lg capitalize text-blue-300">
          {{ item.name }}
        </h2>
      </header>
      <div v-for="metaItem in item.metaList" :key="metaItem.name" class="p-2">
        <p>{{ metaItem.name }}: {{ metaItem.value }}</p>
      </div>
    </div>
  </article>
</template>
