// tailwind.config.js
module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: 'class', // or 'media' or 'class'
  theme: {
    extend: {},
    fontFamily: {
      'merienda': ['Merienda', 'cursive'],
      'arima' : ['Arima Madurai', 'cursive']
    }
  },
  variants: {
    extend: {},
  },
  plugins: [],
}