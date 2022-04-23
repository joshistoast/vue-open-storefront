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

// watch for errors
watch(error, () => {
  if (error) {
    console.error(error)
  }
})

</script>

<template>
  <nav v-if="result.menu" class="flex items-baseline ml-10 space-x-4">
    <NuxtLink
      v-for="(menuItem, i) in result.menu.items"
      :key="menuItem.id"
      :to="shopUrlToRelativePath(menuItem.url)"
    >
      {{ menuItem.title }}
    </NuxtLink>
  </nav>
</template>
