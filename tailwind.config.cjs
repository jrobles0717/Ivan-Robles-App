/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"], // Ensure this matches your project structure
  theme: {
    extend: {
      colors: {
        brand: {
          50: "#ffe4f0", // Lightest shade
          100: "#ffb8d4",
          200: "#ff8bb8",
          300: "#ff5e9c",
          400: "#ff3180",
          500: "#d64a9b", // Base brand color
          600: "#b03e83",
          700: "#8a326b",
          800: "#642653",
          900: "#3e193b", // Darkest shade
        },
        black: {
          DEFAULT: "#000000", // Standard black
        },
      },
    },
  },
  plugins: [],
};
