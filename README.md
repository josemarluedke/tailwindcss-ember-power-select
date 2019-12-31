# Tailwind CSS for Ember Power Select ![](https://github.com/josemarluedke/tailwindcss-ember-power-select/workflows/CI/badge.svg)

[Ember Power Select](https://github.com/cibernox/ember-power-select) is a
powerful Ember addon for working with selects. This is a Tailwind CSS plugin
for styling both `<PowerSelect>`, `<PowerSelectMultiple>` and all the
options related to these.

## Documentation

The basic documentation can be found here:

[Read the documentation](https://josemarluedke.github.io/tailwindcss-ember-power-select/)

## Compatibility

* TailwindCSS v1 or above
* Node.js v8.3 or above

## Installation

1. Install the plugin:

```
yarn add -D tailwindcss-ember-power-select
```

2. Add it to your tailwind.config.js file:

```js
// tailwind.config.js
module.exports = {
  // ...
  plugins: [
    require('tailwindcss-ember-power-select').plugin({
      // Config options go here eg.
      // borderColor: 'red'
    })
  ]
}
```

3. Disable default Ember Power Select theme. Add to your `ember-cli-build.js` file:

```js
// ember-cli-build.js

// ...
module.exports = function(defaults) {
  let app = new EmberApp(defaults, {
    'ember-power-select': {
      theme: false
    },

    // ...
  });
  return app.toTree();
};
```

## Roadmap

A few things we still need to do:

- [ ] Add `dir=rtl` styles
- [ ] Add animation for dropdown
- [ ] Add documentation for customizing icons
- [ ] Add documentation for sizes

## License

This project is licensed under the [MIT License](LICENSE.md).
