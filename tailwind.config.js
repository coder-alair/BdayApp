/** @type {import('tailwindcss').Config} */
const tailwindOverwrites = require("./src/utils/tailwind-overwrites.json");

module.exports = {
  content: ["./src/**/*.{html,js,jsx}"],
  theme: {
    extend: tailwindOverwrites,
  },
  plugins: [],
}

