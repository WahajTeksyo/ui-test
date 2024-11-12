/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{js,jsx,ts,tsx}",],
  theme: {
    extend: {
      fontFamily: {
        'poppins': ['"Poppins"', 'sans-sarif' ],
      },
      colors: {
        primary: '#5A6ACF',
        secondary: '#C8CBD9',
        txtClr: '#273240',
        hedtxt: '#1F384C',
        txtbg: '#F6F6FB',
        'icon-clr': '#A6ABC8',
        'light-prp': '#C7CEFF',
        'light-prps1': '#c5ccfc4a',
        'sd-gray-shade': '#F1F2F7'
      }
    },
  },
  plugins: [],
}

