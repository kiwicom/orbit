# Orbit tailwind preset

This package contains the Orbit Tailwind preset.

The default exported preset includes all of the Orbit's foundation styles (typography, colors, spacing, etc…) and all the needed configuration for component-specific classes used internally.

## Installation

```bash
yarn add -D @kiwicom/orbit-tailwind-preset
```

or with npm:

```bash
npm install --save-dev @kiwicom/orbit-tailwind-preset
```

## Usage

In your `tailwind.config.js` file (or equivalent), add the following:

```js
const orbitComponentsPreset = require("@kiwicom/orbit-tailwind-preset");

module.exports = {
  presets: [
    orbitComponentsPreset({
      // Enable normalizing of the browser's default styles, which is disabled by default
      disablePreflight: false,
    }),
  ],
};
```

As an example, the classes applied below become available right away. They apply, respectively, the CSS properties `color` with the value of the palette token `blueNormal` and `padding` with the value of the spacing token `small`. Both tokens are available on the `@kiwicom/orbit-design-tokens` package.

```html
<p class="text-blue-normal p-sm">...</p>
```

Notice that other component-specific classes will also be available. However, they are not expected to be used outside of Orbit's internal development. They are not documented and Orbit is not responsible for possible breaking changes that might occur by its usage in other projects.
