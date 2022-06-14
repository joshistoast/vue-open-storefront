<script setup lang="ts">
import {} from '@/types'
import { useCustomer } from '@/stores'
import {} from '@/apollo/customer/mutations'

const customer = reactive({
  firstName: '',
  lastName: '',
  email: '',
  password: ''
})
const confirmPassword = ref('')
const canRegister = computed(() =>
  customer.firstName &&
  customer.lastName &&
  customer.email &&
  customer.password &&
  customer.password === confirmPassword.value
)
const loginErrors = computed(() => useCustomer().customerUserErrors)

const submitRegister = () => {
  if (canRegister.value) {
    useCustomer().customerCreate(customer)
  }
}

</script>

<template>
  <div>
    <form
      class="grid max-w-xs gap-4 my-6"
      @submit.prevent="submitRegister"
    >
      <UIInput
        stretch
        type="text"
        label="First Name"
        v-model="customer.firstName"
        required
      />
      <UIInput
        stretch
        type="text"
        label="Last Name"
        v-model="customer.lastName"
        required
      />
      <UIInput
        stretch
        type="email"
        label="Email"
        v-model="customer.email"
        required
      />
      <UIInput
        stretch
        type="password"
        label="Password"
        v-model="customer.password"
        required
      />
      <UIInput
        stretch
        type="password"
        label="Password"
        v-model="confirmPassword"
        required
      />
      <div class="text-red-600">
        <span v-for="error in loginErrors">{{ error.message }}</span>
        <span v-if="confirmPassword !== customer.password">Passwords do not match</span>
      </div>
      <div class="flex items-center space-x-3">
        <UIButton
          type="submit"
          :disabled="!canRegister"
        >
          Register
        </UIButton>
        <span>or</span>
        <NuxtLink
          :to="{ name: 'account-login' }"
          class="prose"
        >
          Login
        </NuxtLink>
      </div>
    </form>
  </div>
</template>
