<script setup lang="ts">
import { useFilters } from '~~/stores/filter'

const filters = useFilters()

const updateSort = (e: HTMLSelectElement) => {
  filters.sortKey = e.value
}

</script>

<template>
  <div class="flex flex-col w-full py-2 border-gray-100 border-y md:flex-row md:items-center">
    <label for="collectionSortBy" class="px-2 font-semibold md:pl-0">Sort By</label>
    <select
      id="collectionSortBy"
      class="p-2 transition duration-100 rounded-md outline-none hover:bg-gray-100 focus:ring-4 ring-blue-500"
      @change="filters.sortKey = ($event.target as HTMLSelectElement).value"
    >
      <option
        v-for="(filter, i) in useFilters().sortKeys"
        :key="i"
        :value="filter.value"
        :selected="filter.value === useFilters().sortKey"
      >
        {{ filter.label }}
      </option>
    </select>
  </div>
</template>>
