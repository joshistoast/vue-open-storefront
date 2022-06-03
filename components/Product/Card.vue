<script setup lang="ts">
import { Product } from '@/types'

interface ProductCard {
  product: Product
}
const props = defineProps<ProductCard>()

const hasImage = !!props.product.media?.edges[0]

</script>

<template>

  <div>
    <NuxtLink
      :to="{ name: 'products-handle', params: { handle: product.handle } }"
      class="grid gap-4 group"
    >
      <div class="w-full overflow-hidden rounded-lg aspect-square bg-gray-50 group-hover:opacity-70">
        <UIShopifyImage
          v-if="hasImage"
          class="object-cover object-center w-full h-full"
          :image="product.media.edges[0].node.previewImage"
        />
      </div>
      <div class="grid gap-1">
        <h4 class="text-sm text-gray-700">
          {{ product.title }}
        </h4>
        <ProductPrice
          :price-range="product.priceRange"
          :compare-at-price-range="product.compareAtPriceRange"
        />
      </div>
    </NuxtLink>
  </div>

</template>
