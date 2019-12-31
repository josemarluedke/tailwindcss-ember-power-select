// tailwind.config.js
module.exports = {
  theme: {
    emberPowerSelect: theme => ({
      default: {
        // Change icon color and the icon itself
        statusIcon: {
          iconColor: theme('colors.gray.500'),
          icon: iconColor =>
            `<svg viewBox="0 0 16 16" color="${iconColor}" xmlns="http://www.w3.org/2000/svg"><path fill="none" stroke="currentColor" stroke-linecap="round" d="M4 6.5l3.6 3.6c.2.2.5.2.7 0L12 6.5" /></svg>`
        },

        // Change just the icon
        clearBtn: {
          icon: iconColor =>
            `<svg viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg"><path stroke="${iconColor}" d="M5 5L8 8M11 11L8 8M8 8L5 11L11 5"/></svg>`,

          // Change the color only on hover
          '&:hover': {
            iconColor: theme('colors.red.500')
          }
        },

        // Change just the icon color
        multipleRemoveBtn: {
          iconColor: theme('colors.red.500')
        }
      }
    })
  },
  plugins: [require('tailwindcss-ember-power-select').plugin()]
};
