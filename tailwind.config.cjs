/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['system-ui', '-apple-system', 'BlinkMacSystemFont', 'Inter', 'sans-serif'],
      },
      colors: {
        multiverse: {
          bg: '#020617',
        },
      },
      boxShadow: {
        'glow-indigo': '0 0 80px rgba(129, 140, 248, 0.45)',
      },
    },
  },
  plugins: [],
};
