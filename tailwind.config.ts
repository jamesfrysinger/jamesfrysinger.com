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
    },
    fontSize: {
      base: "1.125rem", // 16px
      // sm: "0.875rem", // 14px
      // lg: "1.125rem", // 18px
      // xl: "1.25rem", // 20px
    },
  },
  plugins: [],
} satisfies Config;
