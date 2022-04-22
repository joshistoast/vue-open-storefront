import { defineNuxtConfig } from 'nuxt'

export default defineNuxtConfig({

  runtimeConfig: {
    public: {
      storefrontApiAccessToken: process.env.STOREFRONT_API_ACCESS_TOKEN,
      storefrontApiEndpoint: process.env.STOREFRONT_API_ENDPOINT,
    }
  },

  modules: [
    '@nuxtjs/tailwindcss',
  ],

  buildModules: [
    '@pinia/nuxt'
  ],

  build: {}

})
