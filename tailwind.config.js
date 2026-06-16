/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          red: '#C41E3A',
          'red-dark': '#8B1A2B',
          'red-light': '#E8474F',
          gold: '#C9A96E',
          'gold-light': '#D4B87A',
          cream: '#FFF8F0',
          'cream-dark': '#F5ECD7',
          dark: '#1A1A1A',
          gray: '#666666',
        }
      },
      fontFamily: {
        display: ['"Noto Serif SC"', '"Source Han Serif SC"', 'serif'],
        body: ['"Noto Sans SC"', '"Source Han Sans SC"', 'sans-serif'],
      },
      animation: {
        'fade-in-up': 'fadeInUp 0.6s ease-out forwards',
        'fade-in': 'fadeIn 0.8s ease-out forwards',
      },
      keyframes: {
        fadeInUp: {
          '0%': { opacity: '0', transform: 'translateY(30px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
      }
    },
  },
  plugins: [],
}
