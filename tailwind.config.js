/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx}",
    "./src/components/**/*.{js,ts,jsx,tsx}",
    "./src/styles/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        // A classe 'font-sans' vai disparar a fonte Nunito
        sans: ['Nunito', 'sans-serif'],
      },
    },
  },
  plugins: [],
}