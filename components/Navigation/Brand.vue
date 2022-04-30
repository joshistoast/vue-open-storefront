<script setup lang="ts">
import { useShop } from '~~/stores/shop'
const shop = useShop()
</script>

<template>
  <NuxtLink to="/" class="block text-lg font-bold rounded-lg">
    {{ shop.title }}
  </NuxtLink>
</template>
