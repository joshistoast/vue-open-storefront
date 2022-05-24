<script setup lang="ts">
import { ProductVariant } from '@/types'
import { useProduct } from '@/stores/product'
import { useCart } from '@/stores/cart'

interface AddToCart {
  variant?: ProductVariant
}
const props = defineProps<AddToCart>()

const canAddToCart = computed(() => {
  return props.variant?.availableForSale ?
    true
  : useProduct().variant?.availableForSale ?
    true
  : false
})
const addToCart = () => {
  if (canAddToCart.value) {
    const line = { merchandiseId: props.variant?.id || useProduct().variant?.id, quantity: 1 }
    useCart().addToCart([line])
  }
}

</script>

<template>
  <UIButton
    color="default"
    stretch
    size="lg"
    :disabled="!canAddToCart"
    @keyup.enter="addToCart"
    @click="addToCart"
  >
    Add To Cart
  </UIButton>
</template>
