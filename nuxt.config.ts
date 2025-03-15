// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  css: ['~/assets/css/main.css'],

  devtools: { enabled: true },
  ssr: false,

  devServer: {
    port: 8000
  },

  compatibilityDate: '2024-08-12'
})
