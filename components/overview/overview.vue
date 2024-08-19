<script lang="ts" setup>
/**
 * OverviewList Component
 * Example Usage: Pokemon & Rick and Morty Overview Pages
 * @prop: data
 * @prop: overviewLayout
 */
import type { OverviewItem, OverviewLayout } from '~/types.js'

const props = defineProps<{
  items: OverviewItem[]
  overviewLayout: OverviewLayout
}>()

// TODO: To make this even better, put it in a Vue Provide/Inject and make each overview component use this
const { overviewLayout, handleOverviewLayoutSwitch } = useOverviewLayout()
</script>

<template>
  <overview-layout-switcher @on-change="handleOverviewLayoutSwitch" />
  <overview-list :overview-layout="overviewLayout">
    <overview-item v-for="item in items" :key="item.id" :overview-layout="overviewLayout">
      <NuxtLink :to="`/${item.link}`">
        <overview-detail :item="item" :overview-layout="overviewLayout" />
      </NuxtLink>
    </overview-item>
  </overview-list>
</template>
