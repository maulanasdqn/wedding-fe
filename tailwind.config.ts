import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  darkMode: ["class", '[data-mode="dark"]'],
  theme: {
    extend: {
      fontFamily: {
        neue: ["Bebas Neue", "sans-serif"],
      },
    },
  },
  plugins: [],
};
export default config;
