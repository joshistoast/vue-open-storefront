<script setup lang="ts">
import { useShop } from '@/stores/shop'

const route = useRoute()

useHead({
  htmlAttrs: {
    lang: "en",
  },
  title: computed(() => {
    return route.meta.title ?
      `${route.meta.title} - ${useShop().title}`
      : useShop().title
  }),
  meta: [
    { name: 'description', content: useShop().description }
  ]
})

</script>

<template>
  <div>
    <NavigationBar />

    <div class="container p-6 mx-auto">
      <slot />
    </div>
  </div>
</template>
