/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      animation: {
        'glow': 'glow 2s ease-in-out infinite alternate',
      },
      keyframes: {
        glow: {
          '0%': { 'box-shadow': '0 0 20px rgba(139, 92, 246, 0.5)' },
          '100%': { 'box-shadow': '0 0 30px rgba(236, 72, 153, 0.7)' }
        }
      }
    },
  },
  plugins: [],
};