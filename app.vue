<script setup lang="ts">
import { useShop } from '@/stores'
import GettingStarted from './components/GettingStarted.vue'

const { pending, error } = await useAsyncData('shop', () => {
  return useShop().getShopGlobals()
})
const runtime = useRuntimeConfig().public

</script>

<template>
  <template
    v-if="runtime.storefrontApiAccessToken && runtime.storefrontApiEndpoint"
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
