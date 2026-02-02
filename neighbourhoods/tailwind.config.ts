import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: "#C8102E", // Calgary Red
          light: "#E63946",
          dark: "#9B0D22",
        },
        secondary: {
          DEFAULT: "#E63946", // Soft Red Accent
          light: "#F06C7C",
          dark: "#C62A3A",
        },
        accent: {
          DEFAULT: "#6B7280", // Calgary Grey
          light: "#9CA3AF",
          dark: "#4B5563",
        },
        background: "#FFFFFF", // White
        text: "#1A1A1A", // Black
      },
    },
  },
  plugins: [],
};

export default config;
