module.exports = {
    content: [
        './assets/**/*.{vue,js,css}',
        './components/**/*.{vue,js}',
        './layouts/**/*.vue',
        './pages/**/*.vue',
        './server/**/*.{js,ts}',
        './plugins/**/*.{js,ts}',
        './nuxt.config.{js,ts}',
        './node_modules/windplus/styles/**/*.{vue,js,css}',
        './node_modules/windplus/styles/*.{vue,js,css}',
        './node_modules/windplus/styles/main.css',
    ],
    plugins: [
        require('@tailwindcss/typography'),
        require('@tailwindcss/forms'),
        require('daisyui')
    ],
}