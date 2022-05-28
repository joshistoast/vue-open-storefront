<script setup lang="ts">
import { useCart } from '@/stores'

</script>

<template>
  <div>
    <template v-if="useCart().lineItemsCount >= 1">
      <CartItem v-for="item in useCart().lineItems" :item="item" />
    </template>
    <div v-else>
      Your cart is empty
    </div>
  </div>
</template>
