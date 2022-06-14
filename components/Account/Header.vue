<script setup lang="ts">
import { useCustomer } from '@/stores'

const routeName = computed(() => useRoute().name)

const askLogout = () => {
  if (window.confirm('Are you sure you want to logout?')) {
    useCustomer().logout()
  }
}

</script>

<template>
  <div
    class="flex flex-col pb-6 border-b border-gray-200 pt-14 md:flex-row md:justify-between"
  >
    <h1 class="mb-4 text-lg font-extrabold md:text-3xl xl:text-4xl md:m-0">
      {{
        routeName === 'account' ? 'Account'
        : routeName === 'account-login' ? 'Login'
        : routeName === 'account-register' ? 'Register'
        : ''
      }}
    </h1>
    <UIButton
      v-if="useCustomer().isSignedIn"
      @click="askLogout"
      color="alternative"
    >
      Log Out
    </UIButton>
  </div>
</template>
