import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  darkMode: ["class", '[data-mode="dark"]'],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Bebas Neue", "sans-serif"],
        body: ["Bebas Neue", "sans-serif"],
        normal: ["Bebas Neue", "sans-serif"],
        bold: ["Bebas Neue", "sans-serif"],
        semibold: ["Bebas Neue", "sans-serif"],
        regular: ["Bebas Neue", "sans-serif"],
        medium: ["Bebas Neue", "sans-serif"],
      },
      animation: {
        "draw-line": "draw-line 1.5s ease-in-out infinite",
      },
      keyframes: {
        "draw-line": {
          "0%": { height: "0%" },
          "50%": { height: "50%" },
          "100%": { height: "100%" },
        },
      },
    },
  },
  plugins: [],
};
export default config;
