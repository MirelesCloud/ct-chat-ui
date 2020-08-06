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
      colors: {
        tangerine: '#FD9786',
        fuschia: '#F567DC',
        powdergrey: '#F7F8F8'
      },
    },
  },
  plugins: [require('@tailwindcss/ui')],
}
