const defaultTheme = require('tailwindcss/defaultTheme');

module.exports = {
  theme: {
    extend: {
      fontFamily: {
        sans: ['Roboto', ...defaultTheme.fontFamily.sans],
      },
    },
  },
  variants: {
    borderWidth: ['responsive', 'last', 'hover', 'focus'],
  },
};