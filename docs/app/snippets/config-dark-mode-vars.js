// tailwind.config.js
module.exports = {
  // ..
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
          '--power-select-border-color': theme('colors.gray.500'),
          '--power-select-selected-background-color': theme('colors.gray.200'),
          '--power-select-multiple-option-background-color': theme(
            'colors.gray.600'
          )
        },
        ['.mode-dark']: {
          '--power-select-text-color': theme('colors.gray.300'),
          '--power-select-disabled-text-color': theme('colors.gray.700'),
          '--power-select-disabled-border-color': theme('colors.gray.800'),
          '--power-select-placeholder-text-color': theme('colors.gray.700'),
          '--power-select-background-color': theme('colors.gray.900'),
          '--power-select-dropdown-background-color': theme('colors.gray.900'),
          '--power-select-border-color': theme('colors.gray.600'),
          '--power-select-selected-background-color': theme('colors.gray.700'),
          '--power-select-multiple-option-background-color': theme(
            'colors.gray.700'
          )
        }
      });
    }

    // ..
  ]
};
