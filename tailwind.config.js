/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        'main': '#1c231f',
        'main-mid': '#232c26',
        'main-light': '#92A498',
        'gold-btn': '#f7921e',
        'green-btn': '#63ab45',
      }
    },
  },
  plugins: [],
};
