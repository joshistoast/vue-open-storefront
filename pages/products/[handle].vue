<script setup lang="ts">
import { useQuery } from '@vue/apollo-composable'
import { getProduct } from '@/apollo/products/queries/product'
import { Product } from '@/types'

const { result, loading, error } = useQuery(getProduct, {
  handle: useRoute().params.handle
})
const product = computed<Product>(() => result.value?.product)

useHead({
  title: computed(() => product.value?.seo?.title ?? product.value?.title ?? ''),
  meta: [
    { name: 'description', content: computed(() => product.value?.seo?.description ?? product.value?.description ?? '') },
    { name: 'og:description', content: computed(() => product.value?.seo?.description ?? product.value?.description ?? '') },
  ],
})
</script>

<template>
  <div>
    <p v-if="loading">Loading...</p>
    <template v-else>
      <template v-if="product">
        <div class="grid grid-cols-1 gap-10 md:grid-cols-2">
          <ProductMedia :media="product.media" />
          <div class="grid gap-6 my-4 auto-rows-max">
            <h1 class="text-lg font-extrabold md:text-3xl xl:text-4xl">{{ product.title }}</h1>
            <ProductPrice
              :price-range="product.priceRange"
              :compare-at-price-range="product.compareAtPriceRange"
            />
            <ProductForm
              :variants="product.variants"
              :options="product.options"
            />
            <ProductAddToCart />
            <div
              class="prose text-gray-600 prose-base"
              v-html="product.descriptionHtml"
            ></div>
          </div>
        </div>
      </template>
      <PageMissing v-else />
    </template>
  </div>
</template>
