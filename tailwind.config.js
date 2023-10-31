/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{html,js}', './index.html', './404.html', './credits.html'],
  theme: {
    extend: {
      colors: {
        'red': '#ea0303'
      }
    },
  },
  plugins: [],
};
