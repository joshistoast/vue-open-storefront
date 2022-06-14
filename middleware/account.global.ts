import { useCustomer } from '@/stores'

export default defineNuxtRouteMiddleware((to, from) => {

  // redirect to login if not logged in
  if (to.name === 'account' && !useCustomer().isSignedIn) {
    return navigateTo({ name: 'account-login' })
  }
  // redirect to account if logged in
  if (to.name === 'account-login' && useCustomer().isSignedIn) {
    return navigateTo({ name: 'account' })
  }
  // redirect to account if visits register page and is already logged in
  if (to.name === 'account-register' && useCustomer().isSignedIn) {
    return navigateTo({ name: 'account' })
  }
})
