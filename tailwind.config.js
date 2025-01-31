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
        customSectionBg: '#f2f2f2',
        customMain: '#434779',
        customPurple: '#444878',
        customGray: '#f9f9f9',
        customGrayDarker: '#595959',
        customGrayBg: '#eeeeee',
        customGrayBg2: '#efefef',
        customBlueLighterN: '#b8d4e4',
        customBlueLighter: '#81bdcd',
        customSkyBlue: '#89b4c6',
        customTurquoiseBlue: '#30849c',
        customTurquoiseGP: '#1c95a4',
        customGreen: '#48b47c',
        customGreenN: '#397b55',
        customGreenN2: '#387c55',
        customGreenLighter: '#43b17b',
        customPink: '#9263b3',
        customPinkGP: '#947ab3',
        customPinkN: '#987bb5',
        customPurpleGP: '#987bb7',
        customPurpleDarker: '#2f3359',
        customGreenBlue: '#134f5c'
      },
    },
  },
  plugins: [],
}

