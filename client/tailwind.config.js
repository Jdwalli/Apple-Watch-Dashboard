/** @type {import('tailwindcss').Config} */

module.exports = {
  mode: "jit",
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        gray: {
          100: "#E0E6E9",
          500: "#ABBBC2",
          700: "#393C49",
          800: "#252836", // Bg primary
          900: "#1F1D2B", // Sidebar and card colors
        },
        sky: {
          300: "#ccf0f8",
          400: "#a5e4f2",
          500: "#7FD9ED",
          600: "#72c3d5",
          700: "#5fa3b2",
        },
        aquamarine: {
          300: "#aaf7e9",
          400: "#6bf1d9",
          500: "#2bebc8",
          600: "#27d4b4",
          700: "#20b096",
        },
        purple: {
          400: "#957ef2",
          500: "#6746ed",
          600: "#5d3fd5",
          700: "#4d35b2",
        },
        red: {
          400: "#f67e7e",
          500: "#f24646",
          600: "#da3f3f",
          700: "#b63535",
        },
      },
    },
  },
  plugins: [],
};
