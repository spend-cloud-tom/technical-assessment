<template>
  <div class="flex flex-col items-center justify-center h-screen text-gray-500">
    <svg
      class="animate-spin h-16 w-16 text-gray-500" xmlns="http://www.w3.org/2000/svg" fill="none"
      viewBox="0 0 24 24"
    >
      <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4" />
      <path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v8h8a8 8 0 01-8 8v-8H4z" />
    </svg>
    <p class="mt-4 text-xl">
      Loading data from API...
    </p>
  </div>
</template>
