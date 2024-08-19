<script setup lang="ts">
import { ListBulletIcon, Squares2X2Icon } from '@heroicons/vue/24/solid'
import { OverviewLayout } from '~/types'

const emits = defineEmits(['onChange'])

function handleClick(event: MouseEvent, val: OverviewLayout) {
  event.preventDefault()

  emits('onChange', val)
}
</script>

<template>
  <div class="flex items-center gap-2">
    <a href="#" @click="(e) => handleClick(e, OverviewLayout.Grid)">
      <Squares2X2Icon class="size-6" />
    </a>
    <a href="#" @click="(e) => handleClick(e, OverviewLayout.List)">
      <ListBulletIcon class="size-6" />
    </a>
  </div>
</template>
