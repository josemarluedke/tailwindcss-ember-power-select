const path = require('path');

// Remove cache to allow rebuilds
delete require.cache[
  path.join(
    path.dirname(require.resolve('tailwindcss-ember-power-select')),
    'defaultOptions.js'
  )
];

module.exports = {
  darkMode: 'class',
  theme: {},
  variants: {
    extend: {
      backgroundColor: ['dark'],
      textColor: ['dark']
    }
  },
  plugins: [
    function({ addBase, theme }) {
      addBase({
        [':root']: {
          '--power-select-text-color': theme('colors.gray.900'),
          '--power-select-disabled-text-color': theme('colors.gray.500'),
          '--power-select-disabled-border-color': theme('colors.gray.300'),
          '--power-select-placeholder-text-color': theme('colors.gray.500'),
          '--power-select-background-color': theme('colors.white'),
          '--power-select-dropdown-background-color': theme('colors.white'),
          '--power-select-border-color': theme('colors.gray.400'),
          '--power-select-selected-background-color': theme('colors.gray.200'),
          '--power-select-multiple-option-background-color': theme(
            'colors.gray.600'
          )
        },
        ['.dark']: {
          '--power-select-text-color': theme('colors.gray.300'),
          '--power-select-disabled-text-color': theme('colors.gray.600'),
          '--power-select-disabled-border-color': theme('colors.gray.700'),
          '--power-select-placeholder-text-color': theme('colors.gray.600'),
          '--power-select-background-color': theme('colors.gray.900'),
          '--power-select-dropdown-background-color': theme('colors.gray.900'),
          '--power-select-border-color': theme('colors.gray.500'),
          '--power-select-selected-background-color': theme('colors.gray.600'),
          '--power-select-multiple-option-background-color': theme(
            'colors.gray.600'
          )
        }
      });
    },

    require('tailwindcss-ember-power-select').plugin({
      textColor: 'var(--power-select-text-color)',
      disabledTextColor: 'var(--power-select-disabled-text-color)',
      disabledBorderColor: 'var(--power-select-disabled-border-color)',
      placeholderTextColor: 'var(--power-select-placeholder-text-color)',
      backgroundColor: 'var(--power-select-background-color)',
      dropdownBackgroundColor: 'var(--power-select-dropdown-background-color)',
      borderColor: 'var(--power-select-border-color)',
      selectedBackgroundColor: 'var(--power-select-selected-background-color)',
      multipleOptionBackgroundColor:
        'var(--power-select-multiple-option-background-color)'
    })
  ]
};
