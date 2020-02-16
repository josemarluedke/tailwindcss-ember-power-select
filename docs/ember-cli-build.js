'use strict';

const EmberApp = require('ember-cli/lib/broccoli/ember-app');
const path = require('path');

const purgecssOptions = {
  content: ['./app/index.html', './app/**/*.hbs', './node_modules/**/*.hbs'],
  defaultExtractor: content => {
    return content.match(/[A-Za-z0-9-_:/]+/g) || [];
  },
  whitelistPatterns: [/mode-dark/, /hljs/]
};

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
          require('autoprefixer'),
          require('@fullhuman/postcss-purgecss')(purgecssOptions)
        ]
      }
    }
  });

  return app.toTree();
};
