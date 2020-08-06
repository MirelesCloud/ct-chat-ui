const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
  purge: [
    './index.html',
    './src/**/*.vue',
    './src/**/*.js',
    // etc.
  ],
  theme: {
    extend: {
      fontFamily: {
        display: ['Montserrat', 'sans-serif'],
        body: ['Montserrat', 'sans-serif'],
        sans: ['Montserrat', ...defaultTheme.fontFamily.sans],
      },
    },
  },
  plugins: [require('@tailwindcss/ui')],
}
