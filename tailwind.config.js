/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        firstColor: "#784599",
        secondColor: "#0989FF",
        active: "#a8ff96",
        passive: "#fcba81",
        banned: "#ff7575",
      },
      fontFamily: {
        inter: ["Inter", "sans-serif"],
      },
    },
  },
  plugins: [require("daisyui")],
};
