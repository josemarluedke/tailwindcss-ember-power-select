// tailwind.config.js
module.exports = {
  theme: {
    emberPowerSelect: theme => ({
      default: {
        trigger: {
          borderRadius: theme('borderRadius.lg')
        }
      }
    })
  },
  plugins: [require('tailwindcss-ember-power-select').plugin()]
};
