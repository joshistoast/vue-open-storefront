<script setup lang="ts">

interface Checkbox {
  disabled?: boolean
  error?: boolean
  id?: string
  indeterminate?: boolean
  label?: string
  message?: string
  hint?: string
  modelValue?: any
  readonly?: boolean
  inline?: boolean
}
const props = withDefaults(defineProps<Checkbox>(), {})

</script>

<template>

  <div
    class="items-center mr-4 w-fit"
    :class="[
      inline ? 'inline-flex' : 'flex',
    ]"
  >
    <!-- TODO: emit value -->
    <input
      :id="id"
      type="checkbox"
      :disabled="disabled"
      @input="$emit('input', $event)"
      class="w-4 h-4 text-indigo-600 border border-gray-300 rounded appearance-none focus:ring-indigo-500 focus:ring-2 ring-offset-2"
      :class="[
        !disabled ? 'hover:border-gray-400' : '',
      ]"
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
        <span
          v-if="hint"
          class="ml-1"
          :class="[
            disabled ? 'text-gray-400' : 'text-gray-500',
          ]"
        >
          {{ hint }}
        </span>
      </label>
      <p
        v-if="message"
        class="text-xs font-normal text-gray-500"
      >
        <span>{{ label }}</span>
      </p>
    </div>
  </div>

</template>

<style lang="postcss" scoped>
[type=checkbox]:checked {
    background-image: url(data:image/svg+xml;charset=utf-8;base64,PHN2ZyB2aWV3Qm94PScwIDAgMTYgMTYnIGZpbGw9JyNmZmYnIHhtbG5zPSdodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Zyc+PHBhdGggZD0nTTEyLjIwNyA0Ljc5M2ExIDEgMCAwIDEgMCAxLjQxNGwtNSA1YTEgMSAwIDAgMS0xLjQxNCAwbC0yLTJhMSAxIDAgMCAxIDEuNDE0LTEuNDE0TDYuNSA5LjA4Nmw0LjI5My00LjI5M2ExIDEgMCAwIDEgMS40MTQgMHonLz48L3N2Zz4=);
}
.dark [type=checkbox]:checked, .dark [type=radio]:checked, [type=checkbox]:checked, [type=radio]:checked {
    background-color: currentColor;
    background-position: 50%;
    background-repeat: no-repeat;
    background-size: 100% 100%;
    border-color: transparent;
}
</style>
