import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: "class",
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        serif: ["Playfair Display", "Georgia", "serif"],
        sans: ["Inter", "system-ui", "sans-serif"],
        mono: ["JetBrains Mono", "Menlo", "monospace"],
      },
      colors: {
        paper: "#FAFAF9",
        ink: "#1A1A1A",
        muted: "#6B7280",
        border: "#E5E7EB",
        surface: "#FFFFFF",
        // dark mode
        "dark-bg": "#0F0F0F",
        "dark-surface": "#1A1A1A",
        "dark-text": "#F5F5F4",
        "dark-muted": "#9CA3AF",
        "dark-border": "#2E2E2E",
        accent: "#2563EB",
      },
      maxWidth: {
        prose: "680px",
        layout: "960px",
      },
      typography: {
        DEFAULT: {
          css: {
            maxWidth: "680px",
            color: "#1A1A1A",
            lineHeight: "1.75",
            "h1, h2, h3, h4": {
              fontFamily: "Playfair Display, Georgia, serif",
              fontWeight: "600",
            },
          },
        },
      },
    },
  },
  plugins: [],
};

export default config;
