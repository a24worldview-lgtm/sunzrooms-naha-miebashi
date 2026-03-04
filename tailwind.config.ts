import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./lib/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        cream: "#FAF8F5",
        charcoal: "#2C2C2C",
        wood: {
          DEFAULT: "#8B7355",
          dark: "#6B5A45",
          light: "#A8956F",
        },
        sand: "#E8E0D4",
      },
    },
  },
  plugins: [],
};

export default config;
