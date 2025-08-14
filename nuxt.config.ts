// https://nuxt.com/docs/api/configuration/nuxt-config
import tailwindcss from "@tailwindcss/vite";

export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',
  devtools: { enabled: false },
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
      dir: 'ltr',
    },
    {
      code: 'fa',
      name: 'Farsi',
      iso: 'fa-IR',
      file: 'fa.json',
      dir: 'rtl',
    },
  ],
  legacy: false,
  defaultLocale: 'en',
  lazy: true,
  langDir: './locales/',
  strategy: 'no_perfix',
  detectBrowserLanguage: {
    useCookie: true,
    cookieKey: 'i18n_redirected',
    alwaysRedirect: false,
    fallbackLocale: 'en',
  },
},
          app: {
            head: {
              meta: [
                { charset: 'utf-8' },
                { name: 'viewport', content: 'width=device-width, initial-scale=1' },
                { hid: 'description', name: 'description', content: 'A description for my Nuxt 3 app.' }
              ],
            }
          }
})
