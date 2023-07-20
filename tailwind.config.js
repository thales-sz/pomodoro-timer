/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundColor: {
        'primary': '#A4907C',
        'secondary': '#98EECC',
        'terciary': '#D0F5BE',
        'quaternary': '#FBFFDC',
      },
      textColor: {
        'primary': '#A4907C',
        'secondary': '#98EECC',
        'terciary': '#D0F5BE',
        'quaternary': '#FBFFDC',
      },
    },
  },
  plugins: [],
}
