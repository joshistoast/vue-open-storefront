<script setup lang="ts">
import { useCart } from '@/stores'

useHead({
  title: computed(() => `Cart (${useCart().lineItemsCount})`),
})

</script>

<template>
  <div class="w-full">
    <CartHeader />
    <div class="grid items-start grid-cols-8 gap-10">
      <CartItems
        class="col-span-8 lg:col-span-4 xl:col-span-5"
        :items="useCart().lineItems" />
      <CartSummary class="col-span-8 lg:col-span-4 xl:col-span-3" />
    </div>
  </div>
</template>
