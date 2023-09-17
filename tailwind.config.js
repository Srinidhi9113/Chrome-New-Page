/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx}"
  ],
  theme: {
    extend: {
      backgroundImage:{
        "bgImg":"url(/src/assets/Body-bg.jpg)"
      },
      fontFamily:{
        "vt323": [ 'VT323', "monospace"]
      },
    },
  },
  plugins: [
    require('tailwind-scrollbar')
  ],
}

