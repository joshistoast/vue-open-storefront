module.exports = {
  content: [
    './components/**/*.{vue, js, jsx, ts, tsx}',
    './layouts/**/*.vue',
    './pages/**/*.{vue, js, jsx, ts, tsx}',
    './plugins/**/*.{js, ts}',
    './nuxt.config.{js, ts}',
  ],
  theme: {
    extend: {
      typography: ({ theme }) => ({
        default: {
          css: {}
        }
      })
    },
  },
  plugins: [
    require('@tailwindcss/typography')
  ],
}
