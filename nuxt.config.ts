// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-11-01',
  devtools: { enabled: true },
  
  // Enable modules
  modules: [
    '@nuxtjs/i18n',
    '@nuxtjs/color-mode'
  ],
  
  // Configure CSS
  css: ['~/assets/css/main.css'],
  
  // Configure i18n for multilingual support
  i18n: {
    customRoutes: 'config',
    defaultLocale: 'en',
    detectBrowserLanguage: false,
    strategy: 'prefix_except_default',
    types: 'composition',
    vueI18n: './plugins/i18n.ts'
  },
  
  // Color mode configuration
  colorMode: {
    preference: 'light',
    fallback: 'light',
    classSuffix: '',
  },
  
  // PostCSS configuration
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },
})
