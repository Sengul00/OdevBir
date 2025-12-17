/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./App.{js,jsx,ts,tsx}", "./src/**/*.{js,jsx,ts,tsx}"],
  presets: [require("nativewind/preset")],
  theme: {
    extend: {
      colors: {
        kawaii: {
          pink: '#FFD1DC',   // Pastel pembe
          blue: '#AEC6CF',   // Pastel mavi
          purple: '#B39EB5', // Pastel mor
          cream: '#FDFD96',  // Pastel sarı
          dark: '#555555',   // Yumuşak siyah (metin için)
        }
      },
      fontFamily: {
        nunito: ['Nunito_700Bold'],
        nunitoReg: ['Nunito_400Regular'],
      }
    },
  },
  plugins: [],
}