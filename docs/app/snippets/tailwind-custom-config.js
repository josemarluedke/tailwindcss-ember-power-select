// tailwind.config.js
module.exports = {
  theme: {
    extend: {}
  },
  variants: {},
  plugins: [
    require('tailwindcss-ember-power-select').plugin(({ theme }) => {
      return {
        borderColor: theme('colors.red.600')
      };
    })
  ]
};
