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
    detectBrowserLanguage: {
      useCookie: true,
      cookieKey: 'i18n_redirected',
      redirectOn: 'root',
      alwaysRedirect: true,
      cookieSecure: false,
      cookieCrossOrigin: false,
      cookieDomain: null,
    },
    strategy: 'prefix_except_default',
    types: 'composition',
    vueI18n: './plugins/i18n.ts',
    locales: ['en', 'hi', 'as']
  },
  
  // Color mode configuration
  colorMode: {
    preference: 'light',
    fallback: 'light',
    classSuffix: '',
  },
  
  // Nitro configuration for static site generation
  nitro: {
    prerender: {
      crawlLinks: true,
      routes: [
        '/',
        '/projects',
        '/skills',
        '/education',
        '/experience',
        '/contact'
      ]
    }
  },
  
  // PostCSS configuration
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },
})
