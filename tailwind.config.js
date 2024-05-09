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
        themeColor : "#1D232A",
        pmColor : "#00a8ff",
      }
    },
  },
  plugins: [require('daisyui')],
}

