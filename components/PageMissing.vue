<script setup lang="ts">
import { Icon } from '@iconify/vue'

useHead({
  title: 'Not Found',
})
</script>

<template>
  <div class="mt-20">
    <p class="font-bold tracking-wide text-indigo-500 uppercase">404 Error</p>
    <h1 class="my-2 text-5xl font-extrabold">Page Not Found</h1>
    <p class="text-gray-500">Sorry, we couldn't find the page you're looking for.</p>
    <NuxtLink
      :to="{ path: '/' }"
      class="inline-flex items-center mt-4 font-medium text-indigo-500 hover:text-indigo-700 group"
    >
      <span>Go back home</span>
      <Icon
        icon="uil:arrow-right"
        class="w-6 h-6 text-current transition-all duration-100 ease-out group-hover:ml-1"
      />
    </NuxtLink>
  </div>
</template>
