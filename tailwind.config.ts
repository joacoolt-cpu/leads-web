import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        navy: {
          DEFAULT: "#1B3A5F",
          50: "#E8F0F7",
          100: "#D1E1EF",
          200: "#A3C3DF",
          300: "#75A5CF",
          400: "#4787BF",
          500: "#1B3A5F",
          600: "#162E4C",
          700: "#112339",
          800: "#0B1726",
          900: "#060C13",
        },
        accent: {
          DEFAULT: "#2E86DE",
          50: "#E8F4FC",
          100: "#D1E9F9",
          200: "#A3D3F3",
          300: "#75BDED",
          400: "#47A7E7",
          500: "#2E86DE",
          600: "#256BB2",
          700: "#1C5085",
          800: "#133658",
          900: "#0A1B2C",
        },
        sky: {
          DEFAULT: "#54A0FF",
          50: "#EBF5FF",
          100: "#D7EBFF",
          200: "#AFD7FF",
          300: "#87C3FF",
          400: "#54A0FF",
          500: "#2E86DE",
          600: "#256BB2",
        },
      },
      fontFamily: {
        sans: ["Inter", "system-ui", "sans-serif"],
      },
    },
  },
  plugins: [],
};
export default config;
