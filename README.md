# Tailwind CSS for Ember Power Select ![](https://github.com/josemarluedke/tailwindcss-ember-power-select/workflows/CI/badge.svg)

[Ember Power Select](https://github.com/cibernox/ember-power-select) is a
powerful Ember addon for working with selects. This is a Tailwind CSS plugin
for styling both `<PowerSelect>`, `<PowerSelectMultiple>` and all the
options related to these.

## Documentation

The basic documentation can be found here:

[Read the documentation](https://josemarluedke.github.io/tailwindcss-ember-power-select/)

## Compatibility

* TailwindCSS v1.2 or above
* Node.js v10 or above

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

4. Add autoprefixer to your PostCSS setup.

Some styles require [autoprefixer](https://github.com/postcss/autoprefixer) to be included in your application. You can
follow [this example](https://github.com/jeffjewiss/ember-cli-postcss#example) to setup
in an Ember app using `ember-cli-postcss`.

## Development

* `git clone https://github.com/josemarluedke/tailwindcss-ember-power-select.git` this repository
* `yarn install`
* `yarn link`
* `cd docs`
* `yarn install`
* `yarn link "tailwindcss-ember-power-select"`
* `ember serve`

Due to the nature of the setup of the docs app, changing the default options of the plugin will
not trigger a rebuild. However, if you open `tailwind.config.js` and just save
it, it will. Resulting in the styles to be updated.

### Linting

* `yarn lint:js`

#### Docs app

* `yarn lint:hbs`
* `yarn lint:js`

## License

This project is licensed under the [MIT License](LICENSE.md).
