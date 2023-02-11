/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        neon: "#52FFA8",
        gray: "#4E5D73",
        "dark-grey": "#323A49",
        "dark-blue": "#1F2632",
        cinza: "#CEE3E9" 
      }
    },
    screens: {
      xs: "375px",
      sm: "768px",
      md: "1060px"
    }
  },
  plugins: [],
}
