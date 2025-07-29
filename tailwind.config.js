/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        helvetica: ['Helvetica', 'Arial', 'sans-serif'],
        poppins: ['Poppins', 'sans-serif'],
      }
    },
    keyframes: {
      waveFloat: {
        '0%, 100%': { transform: 'translateX(0)' },
        '50%': { transform: 'translateX(-50px)' },
      },
    },
    animation: {
      waveFloat: 'waveFloat 10s ease-in-out infinite',
    },
  },

  plugins: [],
};
