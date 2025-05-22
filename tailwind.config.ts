import type { Config } from "tailwindcss";
const colors = require("tailwindcss/colors");

const config: Config = {
  darkMode: "class",
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        ...colors,
        primary: "#0aa0aa",
        secondary: "#0dceda",
        secondary200: "#28e6f2",
        secondary100: "#58ecf5",
        gray: "#e6e6e6"
      },
    },
  },
  plugins: [require("tailgrids/plugin")],
};
export default config;
