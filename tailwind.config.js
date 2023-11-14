import { primary } from './src/utils/colors'
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: primary.DEFAULT,
          light: primary.light,
          dark: primary.dark,
        },

      }
    },
  },
  plugins: [],
}

