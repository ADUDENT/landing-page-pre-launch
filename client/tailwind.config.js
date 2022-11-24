/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        transparent: 'transparent',
        current: 'currentColor',
        'primary': '#A33DC7',
        'secondary': '#3F288D',
        'border': '#1C1EE1',
        'purborder': '#631A8D',
        'pale': '#C7B7FF',
        'greytext': '#4E4E4E',
      },
    },
  },
  plugins: [],
}
