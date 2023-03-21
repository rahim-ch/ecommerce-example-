/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        amazonBlue: '#232f3e',
        amazonOrange: '#ff9900',
        amazonLightGray: '#f3f3f3',
        amazonDarkGray: '#232f3e',
      },
    },
  },
  plugins: [],
}