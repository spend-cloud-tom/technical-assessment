<script setup lang="ts">
defineProps<{
  message: string
}>()
</script>

<template>
  <div
    class="my-6 flex w-full rounded-lg border-l-[6px] border-customRed bg-customYellow bg-opacity-[15%] p-4 shadow-md md:p-5"
    role="alert"
  >
    <div class="w-full">
      <h5 class="text-md text-customRed">
        {{ message }}
      </h5>
    </div>
  </div>
</template>
