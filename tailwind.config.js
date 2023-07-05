/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        dark: {
          100: "#131418",
          200: "#1b1e23",
          300: "#21262c",
          400: "#0c0c0c8c",
          500: "rgba(0,0,0,.9)",
          600: "rgba(0,0,0,.3)",
        },
        green: {
          100: "#64f4ac",
          200: "#64f4acea",
          300: "rgb(100, 244, 172, .7)",
          400: "#05ff82",
          500: "#15eb80",
          600: "rgb(3, 252, 128, .4)",
        },
        red: {
          100: "#rgb(255, 0, 0, .4)",
          200: "#ff0000",
        },
        white: {
          100: "#fff",
          200: "#ccc",
          300: "#ebebebb6",
          400: "#777",
        },
        blue: {
          200: "#4898f0",
          300: "#5552d3",
          400: "#5552d3",
          500: "#513cef",
          600: "#140e32",
        },
      },
    },
  },
  plugins: [],
};
