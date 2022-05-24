<script setup lang="ts">
import { useCart } from '@/stores'

useHead({
  title: computed(() => `Cart (${useCart().lineItemsCount})`),
})
</script>

<template>
  <div>
    Cart Page
  </div>
</template>
