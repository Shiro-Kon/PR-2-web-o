/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [ "./index.html", "./src/**/*.{html,js}"],
  theme: {
    screens: {
      sm: "480px",
      md: "800px",
      lg: "1060px",
      xl: "1440px",
    },
    colors: {
      apricot: "rgb(238, 146, 123)",
      red: "#FF5630",
      "red-2": "#FA5153",
      pink: "#F7ABE7",
      white: "#F6F6F6",
      lightest: "#FFF",
      blue: "#1555E2",
      violet: "#7371EE",
      "violet-2": "#605EEE",
      "light-voilet": "#F1F0FE",
      black: "#27272E",
      green: "#70BC8E",
      "light-green": "#C7EDD6",
      "light-green-2": "#66CB9F",
      peach: "#F8F7F2",
      "dark-gray": "#3F3F4B",
      "dark-gray-2": "#64708A",
      gray: "#A2A5A4",
      "light-gray": "#F6F6F6",
      "light-gray-2": "#E7E8EE",
      "light-gray-3": "#E3E4E8",
      "light-gray-4": "#090f0d",
      "button-hover": "rgb(0 0 0 / 20%)",
    },
    fontFamily: {
      sans: ["Urbanist", "sans-serif"],
    }
  },
  plugins: [],
}