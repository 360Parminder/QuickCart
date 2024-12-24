/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      scrollbar: ['hidden'], // Add this for hiding scrollbars
    },
  },
  plugins: [require('tailwind-scrollbar')],
}

