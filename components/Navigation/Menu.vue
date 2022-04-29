<script setup lang="ts">
import { useQuery, useResult } from '@vue/apollo-composable'
import { menu } from '~/api/shop/queries/menu'
import { Menu } from '~/types'
import { shopUrlToRelativePath } from '~/utilities/helpers'

interface MenuResult {
  menu: Menu
}

// get menu
const { result, loading, error } = useQuery<MenuResult>(menu)
const MenuResult = useResult<MenuResult>(result)

</script>

<template>
  <nav class="flex flex-col md:flex-row md:space-x-1 md:text-sm md:font-medium">
    <template v-if="MenuResult">
      <NuxtLink
        v-for="(menuItem, i) in MenuResult.items"
        :key="menuItem.id"
        :to="shopUrlToRelativePath(menuItem.url)"
        class="block px-3 py-2 rounded-lg hover:bg-gray-100"
      >
        {{ menuItem.title }}
      </NuxtLink>
    </template>
  </nav>
</template>

<style lang="postcss" scoped>
.router-link-active {
  @apply bg-gray-100 text-blue-700;
}
</style>
