<script setup lang="ts">
import { FilterValue } from '@/types'

interface ListFilter {
  values: FilterValue[]
}

const props = defineProps<ListFilter>()
const jsonInput: any = (input: string) => JSON.parse(input)

// ref array of json input values
const filters = ref([])

</script>

<template>
  <div class="space-y-4">
    <UICheckbox
      v-for="value in values"
      :key="value.id"
      :label="value.label"
      :id="value.id"
      :hint="`(${value.count})`"
    />
  </div>
</template>
