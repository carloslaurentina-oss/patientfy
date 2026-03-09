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
        sans: ["Inter", "sans-serif"],
      },
      colors: {
        primary: {
          25: "#ecfdf5",
          50: "#d1fae5",
          100: "#a7f3d0",
          200: "#6ee7b7",
          300: "#34d399",
          400: "#10e881",
          500: "#0ed374",
          600: "#0bae5f",
          700: "#088a4a",
          800: "#056635",
          900: "#034223",
          950: "#022a17",
          1000: "#01150b",
        },
        neutral: {
          25: "#fdfdfc",
          50: "#f8f8f6",
          100: "#f1f0ee",
          200: "#e5e4e1",
          300: "#d4d3ce",
          400: "#b7b5ae",
          500: "#949289",
          600: "#727069",
          700: "#55534e",
          800: "#3c3c39",
          900: "#2a2928",
          950: "#201f1e",
          1000: "#151514",
        },
      },
      screens: {
        sm: "479px",
        md: "767px",
        lg: "991px",
        xl: "1280px",
        "2xl": "1440px",
        "3xl": "1920px",
      },
    },
  },
  plugins: [],
};
export default config;
