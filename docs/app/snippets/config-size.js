// tailwind.config.js
module.exports = {
  theme: {
    emberPowerSelect: theme => ({
      sm: {
        trigger: {
          fontSize: theme('fontSize.sm'),
          padding: theme('spacing.2'),
          minHeight: theme('height.8')
        }
      },
      lg: {
        trigger: {
          padding: theme('spacing.4'),
          minHeight: theme('height.10')
        }
      }
    })
  },
  plugins: [require('tailwindcss-ember-power-select').plugin()]
};
