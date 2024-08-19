<script lang="ts" setup>
/**
 * OverviewItem Component
 * @item: OverviewItem
 * @overviewLayout: OverviewLayout
 */
import type { OverviewLayout } from '~/types'

const props = defineProps<{
  overviewLayout: OverviewLayout
}>()
</script>

<template>
  <li><slot /></li>
</template>
