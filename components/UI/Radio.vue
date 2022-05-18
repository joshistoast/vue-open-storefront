<script setup lang="ts">

interface Radio {
  disabled?: boolean
  error?: boolean
  id?: string
  message?: string
  hint?: string
  modelValue?: any
  label?: string
  value?: any
  checked?: boolean
}
const props = withDefaults(defineProps<Radio>(), {})
const emit = defineEmits<{
  (e: 'update:modelValue', value: any): void
}>()

</script>

<template>
  <div
    class="flex items-center w-fit"
  >
    <input
      :id="id"
      type="radio"
      :disabled="disabled"
      :value="value"
      :checked="checked"
      @input="emit('update:modelValue', value)"
      class="w-4 h-4 text-indigo-600 border border-gray-300 rounded-full appearance-none focus:ring-indigo-500 focus:ring-2 ring-offset-2"
    />
    <div class="ml-2 text-sm" v-if="label || message">
      <label
        v-if="label"
        :for="id"
        class="font-medium"
        :class="[
          disabled ? 'text-gray-400' : 'text-gray-600',
        ]"
      >
        <span>{{ label }}</span>
        <span v-if="hint" class="ml-1 text-gray-500">{{ hint }}</span>
      </label>
      <p
        v-if="message"
        class="text-xs font-normal text-gray-500"
      >
        {{ message }}
      </p>
    </div>
  </div>
</template>

<style lang="postcss" scoped>

[type=radio]:checked {
    background-image: url(data:image/svg+xml;charset=utf-8;base64,PHN2ZyB2aWV3Qm94PScwIDAgMTYgMTYnIGZpbGw9JyNmZmYnIHhtbG5zPSdodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Zyc+PGNpcmNsZSBjeD0nOCcgY3k9JzgnIHI9JzMnLz48L3N2Zz4=);
}

</style>
