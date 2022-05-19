<script setup lang="ts">
import { Filter } from '@/types'
import { Icon } from '@iconify/vue'
import { Popover, PopoverButton, PopoverPanel } from '@headlessui/vue'

interface CollectionFilter {
  filter: Filter
}
const props = defineProps<CollectionFilter>()
const filterValue = ref(null)

</script>

<template>
  <Popover v-slot="{ open }">
    <PopoverButton class="flex flex-row items-center py-2 space-x-1 group">
      <span class="flow-root text-base font-medium text-gray-900">{{ filter.label }}</span>
      <Icon icon="uil:angle-down" class="w-6 h-6 group-hover:text-gray-900" :class="[ open ? 'transform rotate-180 text-gray-900' : 'text-gray-400' ]" />
    </PopoverButton>
    <PopoverPanel class="absolute z-10 px-3 py-4 bg-white border border-gray-300 rounded-md shadow-lg">
      <FiltersPriceRange v-if="filter.type === 'PRICE_RANGE'" :value="filter.values[0]" />
      <FiltersList v-else-if="filter.type === 'LIST'" :values="filter.values" />
    </PopoverPanel>
  </Popover>
</template>
