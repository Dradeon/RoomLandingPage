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
      'mobile-image-hero-1': 'url(/mobile-image-hero-1.jpg)',
      'mobile-image-hero-2': 'url(/mobile-image-hero-2.jpg)',
      'mobile-image-hero-3': 'url(/mobile-image-hero-3.jpg)',
      'desktop-image-hero-1': 'url(/desktop-image-hero-1.jpg)',
      'desktop-image-hero-2': 'url(/desktop-image-hero-2.jpg)',
      'desktop-image-hero-3': 'url(/desktop-image-hero-3.jpg)',
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
