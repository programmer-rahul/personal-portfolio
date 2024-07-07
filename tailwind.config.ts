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
        typewriter: "rgba(var(--typewriter))",

        primary: {
          background: "rgba(var(--primary-backgrond))",
          foreground: "rgba(var(--primary-foreground))",
        },
        secondary: {
          background: "rgba(var(--secondary-background))",
          foreground: "rgba(var(--secondary-foreground))",
        },

        border: "rgba(var(--border))",
      },
      fontFamily: {
        primary: "var(--font-primary)",
        secondary: "var(--font-secondary)",
        heading: "var(--font-heading)",
      },
    },
  },
  plugins: [],
};
export default config;
