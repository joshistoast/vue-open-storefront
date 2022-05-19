<script setup lang="ts">
import { MediaConnection, Media } from '@/types'

interface ProductMedia {
  media: MediaConnection
}
const props = defineProps<ProductMedia>()
const activeMedia = ref<Media>(props.media.edges[0]?.node)

const setActiveMedia = (media: Media) => {
  activeMedia.value = media
}
const isActiveMedia = (media: Media) => activeMedia.value === media

</script>

<template>
  <div class="grid grid-cols-1 gap-4">
    <div class="overflow-hidden rounded-lg" :key="activeMedia.previewImage.id">
      <template v-if="activeMedia.__typename === 'MediaImage'">
        <UIShopifyImage :image="activeMedia.previewImage" />
      </template>
      <template v-else-if="activeMedia.__typename === 'Video'">
        <video controls autoplay loop muted playsinline>
          <source v-for="source in activeMedia.sources" :src="source.url" :type="`video/${source.format}`" />
        </video>
      </template>
    </div>
    <div
      class="grid grid-cols-4 gap-4"
    >
      <div
        v-for="mediaItem in media.edges"
        @click="!isActiveMedia(mediaItem.node) ? setActiveMedia(mediaItem.node) : false"
        class="overflow-hidden rounded-md aspect-[4/3] ring-[3px] ring-offset-2 cursor-pointer"
        :class="[
          isActiveMedia(mediaItem.node) ? 'ring-indigo-500' : 'ring-transparent hover:ring-gray-300'
        ]"
      >
        <UIShopifyImage class="object-cover object-center w-full h-full" :image="mediaItem.node.previewImage" />
      </div>
    </div>
  </div>
</template>
