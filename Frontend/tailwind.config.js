/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        nunito: ['Nunito'],
        nunitoSans:['Nunito Sans']
      },
      colors:{
        "color-blanco":"#FFFFFF",
        "color-azul":"#3952B6",
        "color-negro":"#313131",
        "color-gris":"#6A6A6A",
        "color-gris-claro":"#FAFAFA"
      }
    },
  },
  plugins: [],
}

