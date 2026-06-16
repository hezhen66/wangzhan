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
          chestnut: '#8c502b',
          'red-light': '#E8474F',
          gold: '#C4A265',
          'gold-light': '#D4BA8A',
          'gold-dark': '#8B6914',
          wine: '#6B1A2B',
          bark: '#3C1F10',
          parchment: '#FBF7F0',
          silk: '#FDF8F2',
          cream: '#FEF9F1',
          'cream-dark': '#F5EDDF',
          dark: '#1A1A1A',
          gray: '#666666',
        }
      },
      fontFamily: {
        display: ['"Noto Serif SC"', '"Source Han Serif SC"', 'serif'],
        body: ['"Noto Sans SC"', '"Source Han Sans SC"', 'sans-serif'],
      },
      backgroundImage: {
        'grain': "url(\"data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)' opacity='0.03'/%3E%3C/svg%3E\")",
      },
      animation: {
        'fade-in-up': 'fadeInUp 0.6s ease-out forwards',
        'fade-in': 'fadeIn 0.8s ease-out forwards',
        'steam-1': 'steam1 4s ease-in-out infinite',
        'steam-2': 'steam2 5s ease-in-out infinite 1s',
        'steam-3': 'steam3 6s ease-in-out infinite 2s',
        'float': 'float 3s ease-in-out infinite',
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
        steam1: {
          '0%, 100%': { opacity: '0.12', transform: 'translateY(0) scale(1)' },
          '50%': { opacity: '0.25', transform: 'translateY(-15px) scale(1.05)' },
        },
        steam2: {
          '0%, 100%': { opacity: '0.08', transform: 'translateY(0) scale(1)' },
          '50%': { opacity: '0.18', transform: 'translateY(-20px) scale(1.08)' },
        },
        steam3: {
          '0%, 100%': { opacity: '0.06', transform: 'translateY(0) scale(1)' },
          '50%': { opacity: '0.15', transform: 'translateY(-12px) scale(1.04)' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-4px)' },
        },
      }
    },
  },
  plugins: [],
}
