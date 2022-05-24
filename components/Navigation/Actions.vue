<script setup lang="ts">
import { useShop, useCart } from '@/stores'
import { Icon } from '@iconify/vue'

const shop = useShop()

const actions = [
  {
    icon: 'uil:search',
    title: 'Search',
    to: 'search'
  },
  {
    icon: 'uil:user',
    title: 'My Account',
    to: 'account'
  },
]

const toggleMenu = (state?: boolean) => {
  state ? shop.menuOpen = state : shop.menuOpen = !shop.menuOpen
}

</script>

<template>
  <nav class="flex flex-row items-center space-x-2">

    <NuxtLink
      v-for="(action, i) in actions"
      :key="i"
      :to="{ name: action.to }"
      class="flex items-center p-2 ml-1 space-x-2 font-medium text-gray-500 hover:text-gray-700"
      :title="action.title"
    >
      <Icon :icon="action.icon" inline class="w-6 h-6 text-current" />
    </NuxtLink>

    <NuxtLink
      :to="{ name: 'cart' }"
      :title="`My Cart (${useCart().lineItemsCount})`"
      class="flex items-center p-2 ml-1 space-x-2 font-medium text-gray-500 hover:text-gray-700"
    >
      <Icon icon="uil:shopping-bag" inline class="w-6 h-6 text-current" />
      <span>{{ useCart().lineItemsCount }}</span>
    </NuxtLink>

    <div
      class="p-2 ml-1 text-gray-500 rounded-lg md:hidden hover:bg-gray-100 ring-4 ring-transparent focus:ring-gray-100 active:ring-gray-200"
      @click="toggleMenu()"
      :aria-expanded="shop.menuOpen"
    >
      <Icon icon="uil:ellipsis-h" inline class="w-6 h-6 text-current" />
    </div>

  </nav>
</template>

<style lang="postcss" scoped>

.router-link-active {
  @apply text-blue-600;
}

</style>
