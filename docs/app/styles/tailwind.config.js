const path = require('path');

// Remove cache to allow rebuilds
delete require.cache[
  path.join(
    path.dirname(require.resolve('tailwindcss-ember-power-select')),
    'defaultOptions.js'
  )
];

module.exports = {
  theme: {
    extend: {}
  },
  variants: {},
  plugins: [require('tailwindcss-ember-power-select').plugin()]
};
