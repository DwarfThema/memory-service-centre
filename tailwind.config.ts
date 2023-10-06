import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      animation: {
        shrink: "shrink 0.2s ease-in-out forwards",
        visible: "visible 2s ease-in-out forwards",
      },
      keyframes: {
        shrink: {
          "0%": { transform: "scaleY(1) scaleX(1)" },
          "100%": { transform: "scaleY(0) scaleX(0.6)" },
        },
        visible: {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      fontFamily: {
        dos: ["DOSGothic"],
        vt: ["VT323"],
      },
    },
  },
  plugins: [require("tailwind-scrollbar-hide")],
};
export default config;
