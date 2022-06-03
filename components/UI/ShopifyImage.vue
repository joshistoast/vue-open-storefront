<script setup lang="ts">
import { breakpointsTailwind } from '@vueuse/core'
import { Image } from '@/types'
import { getSrcset } from '@/utilities/images'

interface ShopifyImage {
  image: Image
}

const props = defineProps<ShopifyImage>()
const sizes = `(max-width: ${breakpointsTailwind.md}px) 45vw, 20vw`
const srcset = getSrcset(props.image.url)

// TODO: fix error 'loading' does not exist on 'ElementAttrs<ImgHTMLAttributes>'

</script>

<template>
  <img
    :alt="image.altText || ''"
    :height="image.height || null"
    :srcset="srcset || null"
    :sizes="sizes || null"
    :width="image.width || null"
    src="data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw=="
    loading="lazy"
  />
</template>
