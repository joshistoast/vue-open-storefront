<script setup lang="ts">
import { useCart } from '@/stores/cart'
</script>

<template>
  <div class="grid gap-2 p-8 rounded-lg bg-gray-50">
    <h3 class="text-lg font-medium">Order summary</h3>
    <div class="flex flex-col">
      <div class="flex items-center justify-between py-3 text-sm">
        <span class="text-gray-500">Subtotal</span>
        <span>{{ useCart().subtotalAmount || '--' }}</span>
      </div>
      <div class="flex items-center justify-between py-3 text-sm border-gray-300 border-y">
        <span class="text-gray-500">Tax estimate</span>
        <span>{{ useCart().totalTaxAmount || '--' }}</span>
      </div>
      <div class="flex items-center justify-between py-4">
        <span class="font-medium">Order total</span>
        <span>{{ useCart().totalAmount || '--' }}</span>
      </div>
    </div>
    <div>
      <UIButton
        stretch
        size="lg"
        :disabled="useCart().lineItemsCount === 0"
        :href="useCart().cart.checkoutUrl ?? '#'"
      >
        Checkout
      </UIButton>
    </div>
  </div>
</template>
