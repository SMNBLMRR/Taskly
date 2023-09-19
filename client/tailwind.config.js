/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      borderWidth:{
        "small":"1px"
      },
      height:{
        "smallest":"1px"
      },
      colors: {
        'primary-button': '#f5004f',
      },
      backgroundColor:{
        'modal':"#0F0326"
      },
      boxShadow:{
        "shadow-ligth":"rgba(0, 0, 0, 0.02) 0px 1px 3px 0px, rgba(27, 31, 35, 0.15) 0px 0px 0px 1px"
      }
    },
  },
  plugins: [],
}