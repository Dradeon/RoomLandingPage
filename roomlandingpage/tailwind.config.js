/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme:{
    colors:{
      'DarkGray' : 'hsl(0, 0%, 63%)',
      'Black': 'hsl(0, 0%, 0%)',
      'White': 'hsl(0, 0%, 100%)',
      'VeryDarkGray': 'hsl(0, 0%, 27%)',
    },
    backgroundImage:{

    },
    extend: {
      screens:{
        'custom': '840px',
        'custom2': '960px'
      },
      fontFamily: {
        'spartan': ['League Spartan','sans-serif'],
      }
    },
  },
  plugins: [],
}
