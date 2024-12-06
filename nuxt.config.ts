// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  modules: [
    '@nuxtjs/tailwindcss',
    '@nuxt/eslint',
    '@nuxt/image',
    '@pinia/nuxt',
  ],
  devtools: { enabled: true },
  srcDir: 'src/',
  compatibilityDate: '2024-12-05',
  eslint: { config: { stylistic: true } },
  image: { format: ['avif', 'webp'] },
})
