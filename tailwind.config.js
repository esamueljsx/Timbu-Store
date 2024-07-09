/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        main: "#0A0E28",
        secondary: "#1E2D7B",
        blue: {
          100: "#0B57C9",
          200: "#78ABF8"
        },
      },
      fontFamily: {
        timbu: ["var(--font-trispace)"],
      },
    },
  },
  plugins: [],
};
