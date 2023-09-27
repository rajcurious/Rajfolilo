// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  modules: [
    'nuxt-icon',
     '@pinia/nuxt',
  ],
  css: ['~/assets/css/main.css', '@/assets/scss/global.scss'],
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },
  devtools: { enabled: true },
  app:{
    baseURL: '/rajpatelfolio/'
  },
  vite:{
    css:{
      preprocessorOptions:{
        scss:{
          additionalData : '@use "@/assets/scss/_vars.scss" as *;'
        }
      }
    }
  },
  components:[{
    path: '~/components',
    pathPrefix: false
  }]
})
