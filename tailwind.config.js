/** @type {import('tailwindcss').Config} */
const defaultTheme = require("tailwindcss/defaultTheme");
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sen: ["sen", ...defaultTheme.fontFamily.sans],
      },

      backgroundImage: {
        logo: "url('../public/assets/Safeat.svg')",
      },
    },
  },
  plugins: [],
};
