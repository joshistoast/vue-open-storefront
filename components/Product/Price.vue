<script setup lang="ts">
import { useShop, useProduct } from '@/stores'
import { ProductPriceRange, MoneyV2 } from '@/types'
import { formatLocalePrice } from '@/utilities/money'

// Initially displays product price range
// if product variant is selected, displays variant price

interface ProductPrice {
  priceRange: ProductPriceRange
  compareAtPriceRange: ProductPriceRange
}
const props = defineProps<ProductPrice>()

const { localization } = useShop()
const currencyCode = localization?.country?.currency?.isoCode ?? "USD"
const selectedVariant = computed(() => useProduct().variant)
const useFallbackPrice = computed(() => !selectedVariant.value)

const priceVaries = computed(() => {
  if (useFallbackPrice.value) {
    return props.priceRange.minVariantPrice.amount !== props.priceRange.maxVariantPrice.amount
  } else {
    return props.priceRange.minVariantPrice.amount !== props.priceRange.maxVariantPrice.amount
  }
})
const isOnSale = computed(() => {
  if (useFallbackPrice.value) {
    return props?.priceRange?.minVariantPrice?.amount < props?.compareAtPriceRange?.minVariantPrice?.amount
  } else {
    return selectedVariant.value?.priceV2?.amount < selectedVariant.value?.compareAtPriceV2?.amount
  }
})

const formatPrice = (price: number) =>
  formatLocalePrice(price, "en-US", currencyCode)

</script>

<template>
  <div class="flex text-lg font-medium tracking-wide">
    <template v-if="useFallbackPrice">
      <span v-if="priceVaries">
        {{ formatPrice(priceRange?.minVariantPrice?.amount) }} - {{ formatPrice(priceRange?.maxVariantPrice?.amount) }}
      </span>
      <span v-else>
        {{ formatPrice(priceRange?.minVariantPrice?.amount) }}
      </span>
    </template>
    <template v-else>
      {{ formatPrice(selectedVariant.priceV2.amount) }}
    </template>
    <span v-if="isOnSale"></span>
  </div>
</template>
