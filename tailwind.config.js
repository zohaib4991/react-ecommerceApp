/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        palanquin: ["Palanquin", "sans-serif"],
        montserrat: ["Montserrat", "sans-serif"],
        san: ["Inter", "sans-serif"],
        satoshi: ["Satoshi", "sans-serif"],
      },
      keyframes: {
        dropdown: {
          "0%": { opacity: 0, transform: "translateY(-10px)" },
          "100%": { opacity: 1, transform: "translateY(0)" },
        },
        dropup: {
          "0%": { opacity: 1, transform: "translateY(0)" },
          "100%": { opacity: 0, transform: "translateY(-10px)" },
        },
      },
      animation: {
        dropdown: "dropdown 0.3s ease-out forwards",
        dropup: "dropup 0.2s ease-in forwards",
      },
    },
  },
  plugins: [],
};
