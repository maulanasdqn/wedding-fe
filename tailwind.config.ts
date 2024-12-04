import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  darkMode: ["class", '[data-mode="dark"]'],
  theme: {
    extend: {
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
