/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        textBg: "#EBE9E9"
      },
      screens: {
        "3xl": "2000px",
      },
    },
  },
  plugins: [],
}