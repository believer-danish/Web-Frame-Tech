/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        gray1: "#9C9C9C",
        gray900: "#111928",
        gray3939: "#393939",
      },
      fontFamily: {
        my: ["monospace"],
        roboto: ["var(--font-roboto)"],
        inter: ["var(--font-inter)"],
        playfair: ["var(--font-playfair)"],
        geist: ["var(--font-geist)"],
        cabinet: ["var(--font-cabinet)"],
        poppins: ["var(--font-poppins)"],
      },
    },
  },
  plugins: [require("tailwindcss-motion")],
};
