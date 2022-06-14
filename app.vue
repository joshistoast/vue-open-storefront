<script setup lang="ts">
import { useShop } from '@/stores'
import GettingStarted from './components/GettingStarted.vue'
import { useStoreConfig } from './store.config'

const { pending, error } = await useAsyncData('shop', () => {
  return useShop().getShopGlobals()
})
const config = useStoreConfig

</script>

<template>
  <template
    v-if="config.storefrontApiToken && config.storefrontApiUrl"
  >
    <!-- Remove this if/else fiasco once your shop is configured -->
    <NuxtLayout>
      <NuxtPage />
    </NuxtLayout>
  </template>
  <template v-else>
    <GettingStarted />
  </template>
</template>
