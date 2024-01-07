/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {},
    },
    colors: {
      transparent: 'transparent',
      black: "#000",
      dark: "#161616",
      white: "#fff",
      "border-botton": "#c8c8c9",
      text: "#dedee1",
      "footer-text": "#ffffffc2",
    },
    zIndex: {
      navbar: 9999,
      navlink: 999,
    }
  },
  plugins: [],
};
