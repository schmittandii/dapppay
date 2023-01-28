/** @type {import('tailwindcss').Config} */

const defaultTheme = require('tailwindcss/defaultTheme')
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      keyframes: {
        walk : {
          '0%': {left: '0'},
          '100%': {left: '-100%'}
        }
      },
      animation: {
        'spin-slow': 'spin 3s linear infinite',
        'logo-slide': 'walk 30s linear infinite'
      },
      fontFamily: {
        'bungee': ['Bungee', 'sans-serif']
      },
      colors: {
        darkBg: {
          400: '#1f2643',
          600: '#14182D',
          800: '#0F1220',
          900: '#101322',
          1000: '#05091C' 
        } 
      }
    },
  },
  plugins: [],
}
