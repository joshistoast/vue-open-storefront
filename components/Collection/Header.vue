<script setup lang="ts">
import { Collection } from '~/types'

interface CollectionHeader {
  collection: Collection
}
const props = defineProps<CollectionHeader>()
const { collection } = props
</script>

<template>
  <div>
    <div
      v-if="collection.image"
      class="w-full max-h-[700px] object-cover object-center overflow-hidden rounded-md"
    >
      <UIShopifyImage :image="collection.image" />
    </div>
    <div class="relative flex flex-col items-baseline justify-between pb-6 border-b border-gray-200 pt-14">
      <div>
        <h2 class="text-4xl font-extrabold tracking-tight text-gray-900">{{ collection.title }}</h2>
        <div
          v-if="collection.descriptionHtml"
          v-html="collection.descriptionHtml"
          class="mt-2 text-gray-600"
        ></div>
      </div>
    </div>
    <div>
      <Filters v-if="collection.products.filters" :filters="collection.products.filters" />
    </div>
  </div>
</template>
