<script setup lang="ts">
import { Collection } from '~/types'
import ShopifyImage from '../UI/ShopifyImage.vue';

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
    <div class="py-4">
      <h2 class="text-4xl font-bold leading-relaxed">{{ collection.title }}</h2>
      <div
        v-if="collection.descriptionHtml"
        v-html="collection.descriptionHtml"
      ></div>
    </div>
  </div>
</template>
