import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
      animation: {
        flip: "flip 1s cubic-bezier(0, 0, 0.2, 1) infinite",
      },
      keyframes: {
        flip: {
          from: { transform: "rotateX(0deg)", transformOrigin: "50% bottom " },
          to: { transform: "rotateX(180deg)", transformOrigin: "50% bottom " },
        },
      },
    },
  },
  plugins: [],
} satisfies Config;
