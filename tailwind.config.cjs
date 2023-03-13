const { fontFamily } = require("tailwindcss/defaultTheme");

/** @type {import('tailwindcss').Config} */

const config = {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        "cal-sans": ["var(--cal-sans)", ...fontFamily.sans],
      },
    },
  },
  plugins: [],
};

module.exports = config;
