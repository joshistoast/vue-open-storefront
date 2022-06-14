<script setup lang="ts">
import { useCustomer } from '@/stores'

const isSignedIn = computed(() => useCustomer().isSignedIn)

useHead({
  title: 'Account',
})
watch([isSignedIn], () => {
  if (!isSignedIn.value) {
    navigateTo({ name: 'account-login' })
  }
})
</script>

<template>
  <div>
    <AccountHeader />
    <NuxtPage></NuxtPage>
  </div>
</template>
