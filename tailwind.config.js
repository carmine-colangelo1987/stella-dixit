/**
 * @format
 * @type {import('tailwindcss').Config}
 */
const colors = require('tailwindcss/colors');
const plugin = require('tailwindcss/plugin');

module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  theme: {
    extend: {
      fontFamily: {
        heading: 'Luckiest Guy, cursive',
        base: 'Grandstander, cursive',
      },
      colors: {
        'main-text': {
          DEFAULT: colors['slate']['700'],
          lighten: colors['slate']['500'],
          darken: colors['slate']['900'],
        },
        primary: {
          DEFAULT: colors['purple']['700'],
          darken: colors['purple']['800'],
        },
        secondary: {
          DEFAULT: colors['sky']['700'],
          darken: colors['sky']['800'],
        },
      },
    },
  },
  plugins: [
    plugin(function ({ addUtilities, theme }) {
      const utilities = {
        '.transition-base': {
          transition: 'all ease-in-out .3s',
        },
        // Puoi aggiungere ulteriori classi se necessario
      };

      addUtilities(utilities);
    }),
  ],
  safelist: [{ pattern: /^bg-/ }, { pattern: /^text-/ }],
};
