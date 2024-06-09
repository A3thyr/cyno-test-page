import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    colors: {
      graybg: "#F2F3F2",
      pink1: "#F6417D",
      pink2: "#F76E9C",
      pink3: "#F991B4",
      blue1: "#0F3D75",
      blue2: "#1B4C80",
      blue3: "#346DAB",
      white: "#FFFFFF",
      black: "#000000",
    },
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
    },
  },
  plugins: [],
};
export default config;
