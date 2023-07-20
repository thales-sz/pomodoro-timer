/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'primary': 'rgb(164, 144, 124)',
        'secondary': 'rgb(152, 238, 204)',
        'terciary': 'rgb(208, 245, 190)',
        'quaternary': 'rgb(251, 255, 220)',
      },
    },
  },
  plugins: [],
}
