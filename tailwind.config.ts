import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "rgba(var(--background))",
        main: "rgba(var(--main))",

        primary: {
          background: "rgba(var(--primary-backgrond))",
          foreground: "rgba(var(--primary-foreground))",
        },
        secondary: {
          background: "rgba(var(--secondary-background))",
          foreground: "rgba(var(--secondary-foreground))",
        },
      },
    },
  },
  plugins: [],
};
export default config;
