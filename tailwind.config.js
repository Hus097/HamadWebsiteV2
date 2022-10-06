/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    fontSize:{
      'big':'3rem',
      'md':'2rem',
      'sm':'1.5rem',
      'p':'1rem',
      'f':'0.8rem',
      't':'0.5rem',
    },
    colors:{
      'q-black': '#252525',
      'q-red': '#8D1A3D',
      'q-gray': '#B3B3B3',
      'd-gray': '#4E4E4E',
      'white': '#fff',
      'q-white': '#F5F5F5',

     },
    fontFamily:{
      'body':['Qatar'],
      'num':['Qatarnumbers'],    
    },
    extend: {
      backgroundImage: {
        'bg-section': "url('/dist/imgs/section2.png')",
      },
      backgroundColor:{
        'overlays': "rgba(255, 255, 255, 0.9)",
      }
    },
  },
  plugins: [],
}
