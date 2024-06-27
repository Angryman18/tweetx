import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic": "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
    },
    colors: {
      LightShadow: "#5D676E",
      LBlack: "#08080E",
      Text: "#ff748d",
      LightGray: "#f9f9f9",
      LBlue: "#1E88E5",
      Red: "#FF0000",
      Gray: "#e3dede",
      MediumGray: "#333030",
      Brown: "#c03546"
    },
  },
  plugins: [],
};
export default config;
