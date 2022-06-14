import { defineNuxtConfig } from 'nuxt'
import { useStoreConfig } from './store.config'

export default defineNuxtConfig({

  ssr: true,

  components: {
    global: true,
    dirs: ['~/components'],
  },

  modules: [
    '@nuxtjs/tailwindcss',
  ],

  buildModules: [
    '@pinia/nuxt',
    '@vueuse/nuxt',
  ],

  vite: {
    optimizeDeps: {
      include: [
        '@headlessui/vue',
        'vue',
      ]
    }
  },

  build: {
    transpile: [
      '@apollo/client',
      '@vue/apollo-composable',
      'ts-invariant/process',
      'uuid'
    ]
  }

})
