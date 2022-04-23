import { createNuxtPersistedState } from 'pinia-plugin-persistedstate'

export default function ({ $pinia }) {
  if (process.client) {
    $pinia.use(createNuxtPersistedState)
  }
}
