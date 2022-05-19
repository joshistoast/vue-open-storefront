import { defineNuxtConfig } from 'nuxt'

export default defineNuxtConfig({

  ssr: true,

  runtimeConfig: {
    public: {
      storefrontApiAccessToken: process.env.STOREFRONT_API_ACCESS_TOKEN,
      storefrontApiEndpoint: process.env.STOREFRONT_API_ENDPOINT,
    }
  },

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
