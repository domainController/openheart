/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./app/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ['"Inter"', "sans-serif"],
      },
      colors: {
        primary: "#1A1A1A",
        accent: "#0041C2",
        background: "#F8F8F8",
      },
    },
  },
  plugins: [],
};
