/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {},
    colors: {
      "light-cyan": "hsl(193, 38%, 86%)", // slate-300
      "neon-green": "hsl(150, 100%,66%)", // emerald-300
      "grayish-blue": "hsl(217, 19%, 38%)", //slate-600
      "dark-grayish-blue": "hsl(217, 19%, 24%)", //gray-700
      "dark-blue": "hsl(218, 23%, 16%)", //gray-800
      "neon-green-light": "#33c57c",
    },
    fontFamily: {
      signature: ["Manrope", "sans-serif"],
    },
    boxShadow: {
      "neon-green-light-hover": "0 0 20px rgba(51, 197, 124, 0.8)",
    },
  },
  plugins: [],
};
