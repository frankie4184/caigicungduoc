/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class",
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        blue: {
          dark: "hsl(209, 23%, 22%)",
          "very-dark": "hsl(200, 15%, 8%)",
          "bg-very-dark": "hsl(207, 26%, 17%)",
        },
        gray: {
          dark: "hsl(0, 0%, 52%)",
          light: "hsl(0, 0%, 98%)",
          // light: "black",
        },
        white: "hsl(0, 0%, 100%)",
      },
    },
  },
  plugins: [],
};
