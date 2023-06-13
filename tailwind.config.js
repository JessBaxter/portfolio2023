/** @type {import('tailwindcss').Config} */

const primaryLight = "#00BAB1";
const primaryLightFocus = "#00e0d5";
const primaryDark = "#003d3a";
const primaryDarkFocus = "#00716B";

module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}"
  ],
  darkMode: "class",
  variants: {
    extend: {
      opacity: ["disabled"],
      cursor: ["disabled"]
    }
  },
  daisyui: {
    themes: [
      {
        dark: {
          // default theme because first in list
          primary: primaryDark,
          "primary-focus": primaryDarkFocus,
          secondary: "#E3E4E5",
          "base-100": "#fff",
          neutral: "#ededed",
          success: primaryDark,
          warming: "#d49c25",
          error: "#FF0000"
        },
        light: {
          primary: primaryLight,
          "primary-focus": primaryLightFocus,
          secondary: "#2a353c",
          "secondary-focus": "#445158",
          "base-100": "#2a353c",
          neutral: "#1b2327",
          success: primaryLight,
          warning: "#d49c25",
          error: "#FF7B8F"
        }
      }
    ]
  },
  plugins: [require("daisyui")]
};
