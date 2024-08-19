<script lang="ts" setup>
/**
 * OverviewList Component
 * @prop: data
 * @prop: overviewLayout
 */
import { OverviewLayout } from '~/types.js'

const props = defineProps<{
  overviewLayout: OverviewLayout
}>()

const classes = computed(() => (props.overviewLayout === OverviewLayout.Grid ? 'flex gap-8 flex-wrap' : ''))
</script>

<template>
  <ul :class="classes">
    <slot />
  </ul>
</template>
