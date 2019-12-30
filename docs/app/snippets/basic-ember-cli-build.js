// ember-cli-build.js
// ...
module.exports = function(defaults) {
  let app = new EmberApp(defaults, {
    'ember-power-select': {
      theme: false
    }

    // ...
  });
  return app.toTree();
};
