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
    useCart().addToCart((props.variant?.id || useProduct().variant?.id), 1)
  }
}

</script>

<template>
  <UIButton
    color="default"
    stretch
    size="lg"
    :disabled="!canAddToCart"
    @click="addToCart"
  >
    Add To Cart
  </UIButton>
</template>
