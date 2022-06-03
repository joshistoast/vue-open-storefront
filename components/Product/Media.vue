<script setup lang="ts">
import { MediaConnection, Media } from '@/types'
import { useProduct } from '@/stores'
import { v4 as uuidv4 } from 'uuid'

// TODO: fix types

interface ProductMedia {
  media: MediaConnection
}
const props = defineProps<ProductMedia>()
const activeMedia = ref<Media>(props.media.edges[0]?.node)
const selectedVariantImage = computed(() => useProduct().variant?.image)

const setActiveMedia = (media: Media) => {
  activeMedia.value = media
}
const isActiveMedia = (media: Media) => activeMedia.value === media

watch(selectedVariantImage, (newVariant, oldVariant) => {
  if (newVariant !== oldVariant && !!selectedVariantImage.value) {
    setActiveMedia({
      __typename: 'MediaImage',
      previewImage: selectedVariantImage.value,
      alt: ''
    })
  }
})

</script>

<template>
  <div class="grid grid-cols-5 gap-4 place-self-start">

    <!-- Media List -->
    <div class="grid content-start order-2 grid-cols-4 col-span-5 gap-4 md:grid-cols-3 lg:col-span-1 lg:grid-cols-1 lg:order-1 place-self-start">
      <div
        v-for="mediaItem in media.edges"
        @click="!isActiveMedia(mediaItem.node) ? setActiveMedia(mediaItem.node) : false"
        class="overflow-hidden rounded-md aspect-[4/3] ring-[3px] ring-offset-2 cursor-pointer"
        :class="[
          isActiveMedia(mediaItem.node) ? 'ring-indigo-500' : 'ring-transparent hover:ring-gray-300'
        ]"
      >
        <UIShopifyImage
          class="object-cover object-center w-full h-full"
          :image="mediaItem.node.previewImage"
        />
      </div>
    </div>

    <!-- Media Preview -->
    <div
      class="order-1 col-span-5 overflow-hidden rounded-lg lg:col-span-4 place-self-start lg:order-2"
      :key="uuidv4()"
    >
      <template v-if="activeMedia.__typename === 'MediaImage'">
        <UIShopifyImage :image="activeMedia.previewImage" />
      </template>
      <template v-else-if="activeMedia.__typename === 'Video'">
        <video controls autoplay loop muted playsinline>
          <source
            v-for="source in activeMedia.sources"
            :src="source.url"
            :type="`video/${source.format}`"
          />
        </video>
      </template>
    </div>
  </div>
</template>
