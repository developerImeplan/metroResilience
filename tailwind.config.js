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
        customGray: '#f9f9f9',
        customGrayDarker: '#595959',
        customGrayBg: '#eeeeee',
        customBlueLighter: '#81bdcd',
      },
    },
  },
  plugins: [],
}

