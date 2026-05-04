import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        editorial: ["Cormorant Garamond", "serif"],
        sans: ["Inter", "sans-serif"],
      },
      colors: {
        black: {
          DEFAULT: "#0a0a0a",
        },
        gray: {
          light: "#a0a0a0",
          dark: "#3a3a3a",
          border: "#e5e5e5",
        },
      },
    },
  },
  plugins: [],
};

export default config;