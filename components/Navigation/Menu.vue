<script setup lang="ts">
import { useQuery } from '@vue/apollo-composable'
import { getMenu } from '@/apollo/shop/queries/menu'
import { Menu } from '@/types'
import { shopUrlToRelativePath } from '@/utilities/helpers'
import { useShop } from '@/stores/shop'
import { breakpointsTailwind, useBreakpoints } from '@vueuse/core'
import { Icon } from '@iconify/vue'

interface MenuResult {
  menu: Menu
}
const shop = useShop()
const menuOpen = computed(() => shop.menuOpen)
const breakpoints = useBreakpoints(breakpointsTailwind)
const isMobileUI = breakpoints.smaller('md')

// get menu
const { result, loading, error } = useQuery<MenuResult>(getMenu)
const menu = computed(() => result.value?.menu)

watch([useRoute(), isMobileUI], () => {
  shop.menuOpen = false
})

</script>

<template>
  <nav
    v-show="isMobileUI ? menuOpen : true"
    class="absolute inset-x-0 flex flex-col w-full font-medium bg-white border-b border-gray-200 md:items-center md:border-none md:ml-8 md:flex-row md:w-auto md:space-x-1 md:text-sm md:font-medium md:relative top-full md:bg-transparent"
  >
    <template v-if="menu">
      <div
        v-for="menuItem in menu.items"
        :key="menuItem.id"
        class="relative group"
      >
        <NuxtLink
          :to="shopUrlToRelativePath(menuItem.url)"
          class="flex flex-row items-center px-3 py-3 text-gray-500 md:py-2 group-hover:text-blue-600"
        >
          <span>{{ menuItem.title }}</span>
          <span v-if="menuItem.items.length"><Icon class="w-5 h-5" icon="uil:angle-down" /></span>
        </NuxtLink>
        <div
          v-if="menuItem.items.length"
          class=""
          :class="[
            !isMobileUI
              ? 'absolute w-60 flex flex-col opacity-0 transition-all duration-100 ease-in-out invisible transform-gpu scale-75 group-hover:scale-100 group-hover:opacity-100 group-hover:visible top-full bg-white rounded-md border border-gray-200 shadow-lg'
              : 'mx-3 px-3 flex flex-col border-l-2 border-gray-300'
          ]"
        >
          <NuxtLink
            v-for="subMenuItem in menuItem.items"
            :key="subMenuItem.id"
            :to="shopUrlToRelativePath(subMenuItem.url)"
            class="block px-3 py-3 text-gray-500 md:py-2 hover:text-blue-600"
          >
            {{ subMenuItem.title }}
          </NuxtLink>
        </div>
      </div>
    </template>
  </nav>
</template>

<style lang="postcss" scoped>
.router-link-active {
  @apply text-blue-600;
}
</style>
