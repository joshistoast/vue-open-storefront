<script setup lang="ts">
import { Icon } from '@iconify/vue'

interface Button {
  icon?: string
  prependIcon?: boolean
  appendIcon?: boolean
  stretch?: boolean
  disabled?: boolean
  type?: string
  href?: string
  to?: string | Object
  color?: 'default' | 'alternative' | 'dark' | 'light' | 'green' | 'red' | 'yellow'
  pill?: boolean
  size?: 'sm' | 'md' | 'lg'
}
const props = withDefaults(defineProps<Button>(), {
  color: 'default',
  size: 'md',
  type: 'button',
})

const is = props.href || props.to ? resolveComponent('NuxtLink') : 'button'

</script>

<template>
  <component
    :is="is"
    :href="!to && href ? href : null"
    :to="!href && to ? to : null"
    :disabled="disabled"
    :type="type"
    class="items-center justify-center font-medium border focus:ring-2 focus:outline-none"
    :class="[
      stretch  ? 'flex w-full'  : 'inline-flex w-auto justify-self-start',
      pill     ? 'rounded-full' : 'rounded-lg',
      disabled ? 'opacity-60 pointer-events-none' : 'cursor-pointer',
      color === 'default'     ? 'bg-indigo-600 border-transparent text-white hover:bg-indigo-700 focus:ring-indigo-600 ring-offset-2' :
      color === 'alternative' ? 'bg-white text-gray-900 border-gray-200 hover:bg-gray-100 hover:text-indigo-600 focus:ring-gray-200 ring-offset-2' :
      color === 'dark'        ? 'text-white bg-gray-800 hover:bg-gray-900 focus:ring-gray-300 border-transparent ring-offset-2' :
      color === 'light'       ? 'bg-white text-gray-900 border-gray-200 hover:bg-gray-100 focus:ring-gray-200 ring-offset-2' :
      color === 'green'       ? 'bg-emerald-600 text-white hover:bg-emerald-700 focus:ring-emerald-300 border-transparent ring-offset-2' :
      color === 'red'         ? 'bg-rose-600 text-white border-transparent focus:ring-rose-300 hover:bg-rose-700 ring-offset-2' :
      color === 'yellow'      ? 'bg-yellow-500 text-white border-transparent focus:ring-yellow-300 hover:bg-yellow-600 ring-offset-2' : '',
      size === 'sm'           ? 'py-2 px-3 text-sm' :
      size === 'md'           ? 'px-5 py-2.5 text-sm' :
      size === 'lg'           ? 'px-5 py-3 text-base': '',
    ]"
  >
    <span v-if="icon && (prependIcon || (!prependIcon && !appendIcon))">
      <Icon :icon="icon" class="w-6 h-6 mx-1" />
    </span>
    <span class="mx-1 leading-tight"><slot /></span>
    <span v-if="icon && appendIcon && !prependIcon">
      <Icon :icon="icon" class="w-6 h-6 mx-1" />
    </span>
  </component>
</template>
