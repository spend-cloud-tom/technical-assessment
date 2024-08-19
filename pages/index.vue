<script setup lang="ts"></script>

<template>
  <ul class="flex flex-wrap px-4 py-10 gap-10 items-center">
    <li>
      <NuxtLink to="/pokemon">
        <NuxtImg src="/pokemon-logo.png" alt="Pokemon" width="250" />
      </NuxtLink>
    </li>
    <NuxtLink to="/rick-and-morty">
      <NuxtImg src="/rick-and-morty-logo.webp" alt="Rick and Morty" width="250" />
    </NuxtLink>
  </ul>
</template>
