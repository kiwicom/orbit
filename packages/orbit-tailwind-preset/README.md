# Orbit tailwind preset

This package contains the Orbit Tailwind presets.

Currently, there are two presets available:

- `orbitPreset` **(default export)** - Orbit's foundation styles, including typography, colors, spacing, etc.
- `orbitComponentsPreset` - Orbit's component tokens. This preset is mainly for Orbit's internal usage and
  migration to Tailwind. It already includes the `orbitPreset` and adds component-level tokens.

## Installation

```bash
yarn add -D @kiwicom/orbit-tailwind-preset
```

or with npm:

```bash
npm install --save-dev @kiwicom/orbit-tailwind-preset
```

## Usage

In your `tailwind.config.js` file, add the following:

```js
const orbitPreset = require("@kiwicom/orbit-tailwind-preset");

module.exports = {
  presets: [orbitPreset],
};
```

We also have a preset with component tokens, which is meant to be used inside Orbit components. In case you need to use our component-level tokens, add the `orbitComponentsPreset` to your `tailwind.config.js` file:

```js
const { orbitComponentsPreset } = require("@kiwicom/orbit-tailwind-preset");

module.exports = {
  presets: [
    orbitComponentsPreset({
      // Enable normalizing of the browser's default styles, which is disabled by default
      disablePreflight: false,
    }),
  ],
};
```

```html
<p class="text-blue-normal">...</p>
```
