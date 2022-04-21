import { defineNuxtConfig } from 'nuxt'

export default defineNuxtConfig({

  modules: [
    '@nuxtjs/tailwindcss',
  ],

  buildModules: [
    '@pinia/nuxt'
  ],

  build: {}

})
