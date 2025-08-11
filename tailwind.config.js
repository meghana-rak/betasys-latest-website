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
    fontSize: {
      'xs': '12px',
      '[16px]': '14px',
      '[18px]': '16px',
      '[20px]': '18px',
      '[22px]': '20px',
      '[24px]': '22px',
      '[28px]': '26px',
      '[32px]': '30px',
      '[36px]': '34px',
      '[40px]': '38px',
      '[42px]': '40px',
      '[44px]': '42px',
      '[48px]': '46px',
      '[52px]': '50px',
      '[56px]': '54px', 
      '[60px]': '58px',
      '[64px]': '62px',
      '[68px]': '66px',
      
    },
  },

  plugins: [],
};



