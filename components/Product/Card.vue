<script setup lang="ts">
import { Product } from '@/types'

interface ProductCard {
  product: Product
}
const props = defineProps<ProductCard>()

</script>

<template>

  <div>
    <NuxtLink
      :to="{ name: 'products-handle', params: { handle: product.handle } }"
    >
      {{ product.title }}
    </NuxtLink>
  </div>

</template>
