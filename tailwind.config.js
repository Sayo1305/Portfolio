/** @format @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        fira:    ['"Fira Mono"', 'monospace'],
        poppins: ['Poppins', 'sans-serif'],
        nerko:   ['"Nerko One"', 'cursive'],
        source:  ['"Source Code Pro"', 'monospace'],
        mont:    ['Montserrat', 'sans-serif'],
      },
      keyframes: {
        pulseDot: {
          '0%, 100%': { opacity: '1' },
          '50%':      { opacity: '0.4' },
        },
        fadeLeft: {
          from: { opacity: '0', transform: 'translateX(-40px)' },
          to:   { opacity: '1', transform: 'translateX(0)' },
        },
        fadeRight: {
          from: { opacity: '0', transform: 'translateX(40px)' },
          to:   { opacity: '1', transform: 'translateX(0)' },
        },
        slideIn: {
          from: { transform: 'translateX(100%)' },
          to:   { transform: 'translateX(0)' },
        },
        cardUp: {
          from: { opacity: '0', transform: 'translateY(-10px)' },
          to:   { opacity: '1', transform: 'translateY(0)' },
        },
      },
      animation: {
        'pulse-dot':  'pulseDot 2s ease-in-out infinite',
        'fade-left':  'fadeLeft 0.8s ease forwards',
        'fade-right': 'fadeRight 0.8s ease 0.2s forwards',
        'slide-in':   'slideIn 0.35s ease-in-out',
        'card-up':    'cardUp 1s ease forwards',
      },
    },
  },
  plugins: [],
};
