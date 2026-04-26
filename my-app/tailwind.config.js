/** @type {import('tailwindcss').Config} */

const colors = require("tailwindcss/colors");

module.exports = {
  content: ["./App.tsx", "./my-app/**/*.{js,jsx,ts,tsx}"],
  presets: [require("nativewind/preset")],
  theme: {
    colors: {
      primary: "#BF3335",
      gray: {
        DEFAULT: "#282828",
        500: "#1D1D1D",
      },
      black: "#030207",
      white: colors.white,
      trasparent: colors.trasparent,
      red: colors.red["500"],
    },
    extend: {
      zIndex: {
        1: "1",
      },
    },
  },
  plugins: [],
};
