<script setup lang="ts">
import {} from '@/types'
import { useCustomer } from '@/stores'

// TODO: handle if customer has no password?

const email = ref('')
const password = ref('')
const canLogin = computed(() => email.value && password.value)
const isSignedIn = computed(() => useCustomer().isSignedIn)
const loginErrors = computed(() => useCustomer().customerUserErrors)

const submitLogin = () => {
  if (canLogin.value) {
    useCustomer().login(email.value, password.value)
  }
}
onMounted(() => {
  const createdEmailParam = useRoute().params.email
  createdEmailParam ? typeof createdEmailParam === 'string' ? email.value = createdEmailParam : email.value = createdEmailParam[0] : false
})
watch([isSignedIn], () => {
  if (isSignedIn.value) {
    navigateTo({ name: 'account' })
  }
})
</script>

<template>
  <div>
    <form
      class="grid max-w-xs gap-4 my-6"
      @submit.prevent="submitLogin"
    >
      <UIInput
        stretch
        type="email"
        label="Email"
        v-model="email"
        required
      />
      <UIInput
        stretch
        type="password"
        label="Password"
        v-model="password"
        required
      />
      <div class="text-red-600" v-if="loginErrors?.length">
        <span v-for="error in loginErrors">{{ error.message }}</span>
      </div>
      <div class="flex items-center space-x-3">
        <UIButton
          type="submit"
          :disabled="!canLogin"
        >
          Sign In
        </UIButton>
        <span>or</span>
        <NuxtLink
          :to="{ name: 'account-register' }"
          class="prose"
        >
          Create an Account
        </NuxtLink>
      </div>
    </form>
  </div>
</template>
