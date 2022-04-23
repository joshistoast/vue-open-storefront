<script setup lang="ts">
import { useShop } from '~~/stores/shop'
const shop = useShop()
</script>

<template>
  <NuxtLink to="/">
    {{ shop.title }}
  </NuxtLink>
</template>
