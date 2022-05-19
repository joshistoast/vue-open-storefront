<script setup lang="ts">
import { Filter } from '@/types'

// TODO

interface CollectionFilters {
  filters: Filter[]
}
const props = defineProps<CollectionFilters>()

</script>

<template>
  <div class="flex flex-row items-center py-3 space-x-4">
    <FiltersFilter
      v-for="filter in filters"
      :filter="filter"
      :key="filter.id"
    />
  </div>
</template>
