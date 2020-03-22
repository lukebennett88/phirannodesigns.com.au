const defaultTheme = require('tailwindcss/defaultTheme');
const plugin = require('tailwindcss/plugin');
const tailwindFilters = require('tailwindcss-filters');
const tailwindUI = require('@tailwindcss/ui');

module.exports = {
  theme: {
    backdropFilter: {
      blur: `blur(${defaultTheme.spacing[2]})`,
    },
    extend: {
      fontFamily: {
        display: ['Lemon Milk', ...defaultTheme.fontFamily.sans],
        sans: ['Nunito', ...defaultTheme.fontFamily.sans],
      },
      colors: {
        'transparent-black': {
          '25': 'hsla(0, 0%, 0%, 0.25)',
          '50': 'hsla(0, 0%, 0%, 0.50)',
          '75': 'hsla(0, 0%, 0%, 0.75)',
        },
        'transparent-white': {
          '25': 'hsla(0, 100%, 100%, 0.25)',
          '50': 'hsla(0, 100%, 100%, 0.50)',
          '75': 'hsla(0, 100%, 100%, 0.75)',
        },
        teal: {
          ...defaultTheme.colors.teal,
          '600': '#009091',
          '700': '#127a7b',
        },
      },
      spacing: {
        full: '100%',
      },
    },
  },
  variants: { margin: ['responsive', 'first'] },
  plugins: [
    // Add line-clamp component
    plugin(function({ addUtilities }) {
      const newUtilities = {
        '.columns-2': {
          columns: '2',
        },
        '.line-clamp': {
          display: '-webkit-box',
          '-webkit-line-clamp': '5',
          '-webkit-box-orient': 'vertical',
          overflow: 'hidden',
        },
      };
      addUtilities(newUtilities, ['responsive', 'hover']);
    }),

    // Add Tailwind Filter plugin
    tailwindFilters,

    // Use Tailwind UI plugin
    tailwindUI,
  ],
};
