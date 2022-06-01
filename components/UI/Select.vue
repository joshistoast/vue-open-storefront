<script setup lang="ts">
import { Icon } from '@iconify/vue'
import { v4 as uuidv4 } from 'uuid'

interface Select {
  id?: string | ReturnType<typeof uuidv4>
  options: any[]
  default?: string
  tabindex?: number
  label?: string
  modelValue?: any
  size?: 'sm' | 'md' | 'lg'
}
const props = withDefaults(defineProps<Select>(), {
  id: () => uuidv4(),
  tabindex: 0,
  size: 'md',
})

const selected = ref(props.modelValue || props.default || props.options[0])

</script>

<template>

  <div>
    <label
      v-if="label"
      :for="id"
    >
      {{ label }}
    </label>

    <select
      :id="id"
      class="block text-sm text-gray-900 bg-white border border-gray-300 rounded-lg appearance-none focus:ring-indigo-600 focus:border-indigo-600"
      :class="[
        size === 'sm' ? 'p-2' :
        size === 'md' ? 'p-2.5' :
        size === 'lg' ? 'py-3 px-4' : '',
      ]"
      @input="$emit('update:modelValue', ($event.target as HTMLSelectElement).value)"
    >
      <option
        v-for="option in options"
        :value="option"
        :selected="option === selected"
      >
        {{ option }}
      </option>
    </select>
  </div>

</template>

<style lang="postcss" scoped>

select {
  print-color-adjust: exact;
  background-image: url(data:image/svg+xml;charset=utf-8;base64,PHN2ZyB4bWxucz0naHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmcnIGZpbGw9J25vbmUnIHZpZXdCb3g9JzAgMCAyMCAyMCc+PHBhdGggc3Ryb2tlPScjNkI3MjgwJyBzdHJva2UtbGluZWNhcD0ncm91bmQnIHN0cm9rZS1saW5lam9pbj0ncm91bmQnIHN0cm9rZS13aWR0aD0nMS41JyBkPSdtNiA4IDQgNCA0LTQnLz48L3N2Zz4=);
  background-position: right 0.5rem center;
  background-repeat: no-repeat;
  background-size: 1.5em 1.5em;
  padding-right: 2.5rem;
}

</style>
