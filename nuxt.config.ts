export default {
  nitro: {
    preset: "vercel",
  },
  modules: [
    '@nuxtjs/tailwindcss',
    '@nuxt/content'
  ],
  css: ["~/assets/css/base.css"],
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