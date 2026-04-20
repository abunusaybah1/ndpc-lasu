import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}/",
    "./app/**/**/*.{js,ts,jsx,tsx}/",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#0a7a5c", //
        secondary: "#0b3c5d", //
      },
    },
  },
  plugins: [],
};

export default config;
