<script setup lang="ts">
import { useShop } from '@/stores/shop'
import { Icon } from '@iconify/vue'

const shop = useShop()

const actions = [
  {
    icon: 'uil:search',
    label: 'Search',
    to: 'search'
  },
  {
    icon: 'uil:user',
    label: 'My Account',
    to: 'account'
  },
  {
    icon: 'uil:shopping-bag',
    label: 'My Cart',
    to: 'cart',
  },
]

const toggleMenu = (state?: boolean) => {
  state ? shop.menuOpen = state : shop.menuOpen = !shop.menuOpen
}

</script>

<template>
  <nav class="flex flex-row space-x-1">
    <NuxtLink
      v-for="(action, i) in actions"
      :key="i"
      :to="{ name: action.to }"
      class="p-2 ml-1 text-gray-500 hover:text-gray-700"
      :title="action.label"
    >
      <Icon :icon="action.icon" inline class="w-6 h-6 text-current" />
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
