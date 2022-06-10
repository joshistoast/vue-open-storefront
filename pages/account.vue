<script setup lang="ts">
import { useCustomer } from '@/stores'

useHead({
  title: 'Account',
})
const router = useRouter()
router.beforeEach((to, from) => {
  if(to.name === 'account' && !useCustomer().isSignedIn) {
    return navigateTo('/login')
  }
})
</script>

<template>
  <div>
    <NuxtPage></NuxtPage>
  </div>
</template>
