/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        secondary:{
          gray:'#dbdbdb'
        },
        primary:{
          DEFAULT:'#3579ea'
        }
      },
      screens:{
        "1xl":'1160px'
      }
    },
  },
  plugins: [],
}