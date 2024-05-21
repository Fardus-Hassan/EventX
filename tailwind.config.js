/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'selector',
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors : {
        themeColor : "#18191A",
        themeColor3 : "#242526",
        pmColor : "#00a8ff",
      },
      fontFamily : {
        poppins : ["Poppins", "sans-serif"],
        montserrat : ["Montserrat", "sans-serif"]
      },
      screens: {
        'xs': {'max': '320px'},
      },
    },
  },
  plugins: [require('daisyui')],
}

