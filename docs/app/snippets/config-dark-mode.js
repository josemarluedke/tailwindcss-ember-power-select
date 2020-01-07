// tailwind.config.js
module.exports = {
  theme: {},
  plugins: [
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
