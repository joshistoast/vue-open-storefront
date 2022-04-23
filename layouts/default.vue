<script setup lang="ts">
import { useShop } from '~~/stores/shop'

const shop = useShop()
const route = useRoute()

const pageTitle = computed(() => {
  return route.meta.title ? `${route.meta.title} - ${shop.title}` : shop.title
})

useHead({
  htmlAttrs: {
    lang: "en",
  },
  meta: [
    { name: 'og:title', content: pageTitle.value },
    { name: 'description', content: shop.description },
  ]
})

</script>

<template>
  <div>
    <Html>
      <Head>
        <Title>{{ pageTitle }}</Title>
      </Head>
    </Html>

    <NavigationBar />

    <div>
      <slot />
    </div>

  </div>
</template>
