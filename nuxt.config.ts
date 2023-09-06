export default {
  nitro: {
    preset: "vercel",
  },
  modules: [
    '@nuxtjs/tailwindcss',
    '@nuxt/content'
  ],
  tailwindcss: {
    plugins: [
      '@tailwindcss/forms'
    ]
  },
};