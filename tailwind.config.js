/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        montserrat: ['Montserrat', 'sans-serif'],
      },
      colors: {
        customMain: '#434779',
        customPurple: '#444878',
        customGray: '#f9f9f9',
        customGrayDarker: '#595959',
        customGrayBg: '#eeeeee',
        customBlueLighter: '#81bdcd',
        customSkyBlue: '#81bdcd',
        customTurquoiseBlue: '#30849c',
        customGreen: '#48b47c',
        customGreenLighter: '#43b17b',
        customPink: '#9263b3',
        customPurpleGP: '#987bb7',
        customPurpleDarker: '#2f3359',
        customGreenBlue: '#134f5c'
      },
    },
  },
  plugins: [],
}

