import defaultTheme from "tailwindcss/defaultTheme";

/** @type {import('tailwindcss').Config} */
export default {
  darkMode: ["class"],
  content: [
    "./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Inter", ...defaultTheme.fontFamily.sans],
        serif: ["Lora", ...defaultTheme.fontFamily.serif],
      },
      typography: {
        DEFAULT: {
          css: {
            // Remove backticks from inline code
            'code::before': {
              content: '""',
            },
            'code::after': {
              content: '""',
            },
            // Add rounded corners to images
            'img': {
              borderRadius: '0.5rem',
            },
          },
        },
      },
    },
  },
  plugins: [require("@tailwindcss/typography")],
};
