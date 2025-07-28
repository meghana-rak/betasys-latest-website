/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        Roboto: ['Roboto', 'sans-serif'],
  helvetica: ['Helvetica', 'Arial', 'sans-serif'],
  poppins: ['Poppins', 'sans-serif'],
}
    },
  },
  plugins: [],
};
