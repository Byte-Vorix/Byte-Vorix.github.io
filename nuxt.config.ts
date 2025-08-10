// https://nuxt.com/docs/api/configuration/nuxt-config
import tailwindcss from "@tailwindcss/vite";

export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',
  devtools: { enabled: true },
  modules: ['@nuxt/content', '@nuxtjs/i18n'],
  css: ['~/main.css'],
  vite: {
    plugins: [
      tailwindcss(),
    ],
  },
  i18n: {
    locales: [
      {
        code: 'en',
        name: 'English',
        iso: 'en-US',
        file: 'en.json',
      },
      {
        code: 'fa',
        name: 'فارسی',
        iso: 'fa-IR',
        file: 'fa.json',
      },
    ],
    defaultLocale: 'en', // Set your default language
    lazy: true, // Lazily load locale files
    langDir: 'locales/', // Directory for your locale files
    strategy: 'prefix_except_default', // Or 'prefix', 'no_prefix'
    detectBrowserLanguage: {
      useCookie: true,
      cookieKey: 'i18n_redirected',
      alwaysRedirect: true,
      fallbackLocale: 'en', // Fallback if browser language not found
    },
  },
})
