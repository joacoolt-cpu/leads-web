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
          DEFAULT: "#1B2A4A",
          50: "#E8EDF5",
          100: "#D1DBEB",
          200: "#A3B7D7",
          300: "#7593C3",
          400: "#476FAF",
          500: "#1B2A4A",
          600: "#162238",
          700: "#111A2B",
          800: "#0B111D",
          900: "#06090F",
        },
        accent: {
          DEFAULT: "#F27A1A",
          50: "#FEF0E4",
          100: "#FDE1C9",
          200: "#FBC393",
          300: "#F9A55D",
          400: "#F27A1A",
          500: "#D46510",
          600: "#A84F0D",
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
