'use strict';

const EmberApp = require('ember-cli/lib/broccoli/ember-app');
const path = require('path');

module.exports = function(defaults) {
  let app = new EmberApp(defaults, {
    snippetPaths: ['app/snippets'],

    'ember-power-select': {
      theme: false
    },

    postcssOptions: {
      compile: {
        enabled: true,
        plugins: [
          require('tailwindcss')(
            path.join('app', 'styles', 'tailwind.config.js')
          ),
          require('autoprefixer')
        ]
      }
    }
  });

  return app.toTree();
};
