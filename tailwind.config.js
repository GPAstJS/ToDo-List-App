/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{html,jsx,js,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        roboto: ["Roboto", "sans-serif"],
        montserrat: ["Montserrat", "sans-serif"],
      },
    },
    fontSize: {
      sm: "12px",
      base: "16px",
      lg: "20px",
      xl: "24px",
      "2xl": "28px",
      "3xl": "32px",
      "4xl": "36px",
    },
  },
  plugins: [],
};
