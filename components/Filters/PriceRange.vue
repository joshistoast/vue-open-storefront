<script setup lang="ts">
import { FilterValue } from '@/types'
import { watchDebounced } from '@vueuse/core'

interface PriceRange {
  value: FilterValue
}
interface PriceRangeInput {
  price: {
    min: number
    max: number
  }
}
const props = defineProps<PriceRange>()
const emit = defineEmits<{
  (e: 'update', value: {min: number, max: number}): void
}>()

const jsonInput: PriceRangeInput = JSON.parse(props.value?.input ?? null)
const minValue = jsonInput.price.min ?? null
const maxValue = jsonInput.price.max ?? null
const min = ref(null)
const max = ref(null)

watchDebounced([min, max], () => {
  emit('update', {
    min: min.value ?? null,
    max: max.value ?? null,
  })
}, {
  debounce: 500
})

</script>

<template>
  <div class="space-y-4">
    <UIInput inline stretch icon="uil:dollar-sign" label="Min Price" :max="maxValue" :min="minValue" type="number" v-model="min" placeholder="" />
    <UIInput inline stretch icon="uil:dollar-sign" label="Max Price" :max="maxValue" :min="(+minValue + +min)" type="number" v-model="max" placeholder="" />
  </div>
</template>
