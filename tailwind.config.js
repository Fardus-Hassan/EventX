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
        themeColor : "#030712",
        themeColor2 : "#111827",
        themeColor3 : "#1F2937",
        pmColor : "#00a8ff",
      },
      fontFamily : {
        poppins : ["Poppins", "sans-serif"],
        montserrat : ["Montserrat", "sans-serif"]
      }
    },
  },
  plugins: [require('daisyui')],
}

