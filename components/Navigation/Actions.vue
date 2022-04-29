<script setup lang="ts">
import { Icon } from '@iconify/vue'

</script>

<template>
  <nav class="flex flex-row space-x-1">
    <NuxtLink
      class="p-2 rounded-lg hover:bg-gray-100"
      :to="{ name: 'account' }"
    >
      <Icon icon="uil:user" inline class="w-6 h-6 text-current" />
    </NuxtLink>
    <NuxtLink
      class="p-2 rounded-lg hover:bg-gray-100"
      :to="{ name: 'cart' }"
    >
      <Icon icon="uil:shopping-bag" inline class="w-6 h-6 text-current" />
    </NuxtLink>
    <NuxtLink
      class="p-2 rounded-lg hover:bg-gray-100"
      :to="{ name: 'search' }"
    >
      <Icon icon="uil:search" inline class="w-6 h-6 text-current" />
    </NuxtLink>
  </nav>
</template>

<style lang="postcss" scoped>

.router-link-active {
  @apply bg-gray-100 text-blue-700;
}

</style>
