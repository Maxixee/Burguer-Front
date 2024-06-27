/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'back-landing': "url('src/assets/background-landing.jpg')"
      }
    },
  },
  plugins: [],
}
