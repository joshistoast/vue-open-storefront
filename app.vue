<script setup lang="ts">
import { useShop } from './stores/shop'

const shopStore = useShop()
const { pending, error } = await useAsyncData('shop', () => {
  return shopStore.getShopGlobals()
})

</script>

<template>
  <div>
    <NuxtLayout>
      <NuxtPage />
    </NuxtLayout>
  </div>
</template>
