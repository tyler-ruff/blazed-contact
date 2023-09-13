export default {
  nitro: {
    preset: "vercel",
  },
  experimental: {
    viteNode: true
  },
  modules: [
    '@nuxtjs/tailwindcss',
    '@nuxt/content',
    'nuxt-icon',
  ],
  css: ["~/assets/css/base.css"],
  env: {
    ablyAPIKey: process.env.ABLY_API_KEY
  },
  build: {
    postcss: {
      postcssOptions: {
        plugins: {
          tailwindcss: {},
          autoprefixer: {},
        },
      },
    },
  },
};