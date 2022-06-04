<script setup lang="ts">
import { Icon } from '@iconify/vue'
import { v4 as uuidv4 } from 'uuid'

interface Input {
  label?: string
  placeholder?: string
  modelValue?: any
  disabled?: boolean
  readonly?: boolean
  message?: string
  error?: boolean
  required?: boolean
  icon?: string
  type?: string
  id?: string | ReturnType<typeof uuidv4>
  stretch?: boolean
  inline?: boolean
}
const props = withDefaults(defineProps<Input>(), {
  type: 'text',
  id: () => uuidv4(),
})
const emit = defineEmits<{
  (e: 'update:modelValue', value: any): void,
  (e: 'changed', value: any): void,
}>()

</script>

<template>
  <div
    class="flex"
    :class="[
      inline ? 'flex-row items-center' : 'flex-col',
      stretch ? 'w-full' : 'w-fit',
    ]"
  >
    <label
      v-if="label"
      :for="id"
      class="flex-none block text-sm font-medium text-gray-700"
      :class="[
        inline ? 'mr-2' : '',
      ]"
    >
      {{ label }}
    </label>
    <div
      :class="[
        label && !inline ? 'mt-1' : '',
        stretch ? 'w-full' : 'w-fit',
      ]"
      class="relative rounded-md shadow-sm"
    >
      <div v-if="icon" class="absolute inset-y-0 left-0 flex items-center pl-2.5 pointer-events-none">
        <span
          :class="error ? 'text-red-500' : 'text-gray-500'"
        >
          <Icon :icon="icon" class="w-5 h-5 text-current" />
        </span>
      </div>
      <input
        :type="type"
        :id="id"
        :name="id"
        :placeholder="placeholder ?? null"
        :disabled="disabled"
        :value="modelValue"
        :required="required"
        @input="$emit('update:modelValue', ($event.target as HTMLInputElement).value)"
        class="block leading-tight w-full py-2 pr-[1.25em] border border-gray-300 rounded-md focus:ring-indigo-500 focus:border-indigo-500 pl-7 sm:text-sm"
        :class="[
          icon ? 'pl-8' : 'pl-[1.25em]',
          stretch ? 'w-full' : '',
        ]"
      />
    </div>
  </div>
</template>
