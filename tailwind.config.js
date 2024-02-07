/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{html,js}'],
  theme: {
    extend: {
      clipPath: {
        right: 'polygon(100% 0, 100% 50%, 100% 100%, 0% 100%, 40% 50%, 0% 0%)',
        left:'polygon(100% 0%, 60% 50%, 100% 100%, 0 100%, 0% 50%, 0 0);',
      },
    },
  },
  plugins: [
    require('tailwind-clip-path'),
  ],
};
