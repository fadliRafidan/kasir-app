/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./App.tsx', './src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
          'kasir-blue': '#6488F7',
      },
      fontFamily: {
          'univers55': ['Univers55'],
          'univers55-bold': ['Univers55Bold'],
      },
  },
  },
  plugins: [],
};
