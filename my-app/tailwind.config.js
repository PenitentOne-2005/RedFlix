/** @type {import('tailwindcss').Config} */

const colors = require("tailwindcss/colors");

module.exports = {
  content: [
    "./index.tsx",
    "./app/**/*.{js,jsx,ts,tsx}",
    "./components/**/*.{js,jsx,ts,tsx}",
  ],
  presets: [require("nativewind/preset")],
  theme: {
    extend: {
      colors: {
        primary: "#BF3335",
        gray: {
          DEFAULT: "#282828",
          500: "#1D1D1D",
        },
        black: "#030207",
        white: colors.white,
        transparent: colors.transparent,
        red: colors.red["500"],
      },
      zIndex: {
        1: "1",
      },
    },
  },
  plugins: [],
};
