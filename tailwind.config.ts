import type { Config } from "tailwindcss";

export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ['"IBM Plex Sans"', "system-ui", "sans-serif"],
        serif: ['"IBM Plex Serif"', "Georgia", "serif"],
        mono: ['"IBM Plex Mono"', "SFMono-Regular", "Menlo", "monospace"],
      },
      maxWidth: {
        measure: "62ch",
      },
    },
  },
  plugins: [],
} satisfies Config;
