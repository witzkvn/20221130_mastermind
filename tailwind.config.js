/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        purple: "#9B5DE5",
        pink: "#F15BB5",
        yellow: "#FEE440",
        cyan: "#00BBF9",
        blue: "#1664F5",
        green: "#00F58B",
      },
    },
  },
  plugins: [require("daisyui")],
  daisyui: {
    themes: ["dark"],
  },
};
