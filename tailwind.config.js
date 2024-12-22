/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      maxWidth: {
        container: "1120px"
      },

      backgroundImage: {
        Banner: "url('../src/assets/banner.png')"
      },

      fontFamily: {
        'inter': ['Lato', 'serif']
      }
    },
  },
  plugins: [],
}