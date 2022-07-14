/** @type {import('tailwindcss').Config} */

module.exports = {
  mode: 'jit',
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#14141A",
        secondary: "#292932",
        red: { DEFAULT : "#EF4444" },
        green: { DEFAULT : "#2BFEBE" },
        white: { DEFAULT : "#F2F0F0" }
      }
    },
  },
  plugins: [],
}
