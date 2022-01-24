const colors = require('tailwindcss/colors')

module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    fontSize: {
      sm: ['14px', '20px'],
      base: ['16px', '24px'],
    },
    container: {
      center: true,
      maxWidth: {
        'md': '700px'
      }
    },
    colors: {
      transparent: 'transparent',
      'white': '#FFFFFF',
      'blue':{
        100: '#587BE0',
      },
      'gray': {
        50: '#DFDFE0',
        200: '#414047',
        300: '6F6E73',
        500: '#BEBEC2',
        700: '#f5f5f5',
        800: '#FCFCFC',
      },
      'accent': {
        2: '#885FFF'
      },
      red: colors.red
      /* 'purple': '#7e5bef',
      'pink': '#ff49db',
      'orange': '#ff7849',
      'green': '#13ce66',
      'yellow': '#ffc82c',
      'gray-dark': '#273444',
      'gray': '#8492a6',
      'gray-light': '#d3dce6', */
    },
    extend: {
      fontFamily: {
        Manrope: ['Manrope', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
