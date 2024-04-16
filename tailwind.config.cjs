/** @type {import('tailwindcss').Config} */
const defaultTheme = require("tailwindcss/defaultTheme")
module.exports = {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  darkMode: "class", // allows toggling dark mode manually
  theme: {
    extend: {
      /**
       * If "Fontsource" is available, set by "import" in Layout.astro.
       * If "Fontsource" is not available, set by "@font-face" in GlobalStyles.astro.
       * - font path: src/assets/fonts
       */
      fontFamily: {
        sans: ["Roboto", "Noto Sans JP", "sans-serif", ...defaultTheme.fontFamily.sans],
      },
    },
  },
  plugins: [require("@tailwindcss/typography")],
}
