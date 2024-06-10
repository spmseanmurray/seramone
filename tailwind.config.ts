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
        sans: ["var(--font-inter)"],
        shrikhand: ["var(--font-shrikhand)"],
      },
    },
  },
  plugins: [require("daisyui")],
  daisyui: {
    themes: ["dim"],
  },
};
export default config;
