/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors: {
        burgundy: '#800020',
        lurgundy: '#b44c63',
        stripe: '#efa4aa',
        durgundy:'#6C001B',
        cream: '#006400',
        beige: '#F5F5DC',
        navy: '#000080',
        primary2: 'hsl(22, 28%, 29%)',
        cream: '#F5F5DC',
        awhite: '#FAEBD7'

      }
    },
  },
  plugins: [],
};
