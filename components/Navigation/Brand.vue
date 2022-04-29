<script setup lang="ts">
import { useShop } from '~~/stores/shop'
const shop = useShop()
</script>

<template>
  <NuxtLink to="/" class="block px-3 py-2 font-bold rounded-lg hover:bg-gray-100">
    {{ shop.title }}
  </NuxtLink>
</template>
