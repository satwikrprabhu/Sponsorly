/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html","./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors:{
        green:{
          0:'#4ee39d',
        1000:'#41CF60'
      //'#4ee39d'
      },
        'primary':'#0b0438'
      },
      fontFamily:{
        Codec:['Codec Cold', 'sans-serif']
      }
    },
  },
  plugins: [],
}
