import vuetify from 'vite-plugin-vuetify'

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: [
    // '@vueuse/nuxt',
  ],
  vite: {
    plugins: [
      vuetify(),
    ]
  },
  build: {
    transpile: ['vuetify'],
  },
})
