import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          orange: "#FF5500",
          "orange-hover": "#E64D00",
          "orange-light": "#FFF2EC",
          "orange-subtle": "rgba(255, 85, 0, 0.08)",
          charcoal: "#0F0F11",
          dark: "#18181B",
          muted: "#71717A",
          border: "#E4E4E7",
          surface: "#F9F9FB",
        },
      },
      fontFamily: {
        sans: [
          "SF Pro Display",
          "-apple-system",
          "BlinkMacSystemFont",
          "Inter",
          "Segoe UI",
          "Roboto",
          "sans-serif",
        ],
        mono: ["SF Mono", "Fira Code", "monospace"],
      },
      backgroundImage: {
        "orange-gradient":
          "linear-gradient(135deg, #FF5500 0%, #FF8833 100%)",
        "radial-orange":
          "radial-gradient(circle at center, rgba(255,85,0,0.12) 0%, rgba(255,255,255,0) 70%)",
      },
    },
  },
  plugins: [],
};

export default config;
