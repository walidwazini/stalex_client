/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "nike-1": "url('/src/images/background/nikebg-1.jpg')",
        "adidas-1": "url('/src/images/background/adidas-bg-1.jpg')",
        "puma-1": "url('/src/images/background/puma-bg-1.jpg')",
      }
    },
  },
  plugins: [require("daisyui")],
}
