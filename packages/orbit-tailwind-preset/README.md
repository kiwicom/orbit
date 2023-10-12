# Orbit tailwind preset

This package contains the Orbit Tailwind preset.

## Installation

```bash
yarn add -D @kiwicom/orbit-tailwind-preset
```

or with npm:

```bash
npm install --save-dev @kiwicom/orbit-tailwind-preset
```

The default exported preset (`orbitComponentsPreset`) includes all of the Orbit's foundation styles (typography, colors, spacing, etc…) and all the needed configuration for component-specific classes used internally.

The `orbitComponentsPreset` function accepts an optional object with one property, `disablePreflight`, which is `false` by default. When set to `true`, it disables the normalization of the browser's default styles. We recommend leaving it enabled, as it avoids the need to reset the browser's default styles manually. The normalization is done by the [Tailwind CSS Preflight](https://tailwindcss.com/docs/preflight) plugin.

## Configuration

In your `tailwind.config.js` file (or equivalent), add the following:

```js
const orbitComponentsPreset = require("@kiwicom/orbit-tailwind-preset");

module.exports = {
  content: [
    // ...
    "./node_modules/@kiwicom/orbit-components/**/*.js",
  ],
  presets: [
    orbitComponentsPreset({
      disablePreflight: false, // default value
      // custom theme configuration, defaults to Orbit's theme
      foundation: {
        palette: {
          product: {
            light: "#9ae5da",
            lightHover: "#7fded0",
            lightActive: "#64d7c6",
            normal: "#00a991",
            normalHover: "#009882",
            normalActive: "#008f7b",
            dark: "#005448",
          },
        },
      },
    }),
  ],
};
```

The `content` property is required for Tailwind to [know which files to scan for classes](https://tailwindcss.com/docs/content-configuration). It should include the path to all your source files that use Tailwind classes. The path to the `@kiwicom/orbit-components` package is required for the component-specific classes to be scanned and built into the final CSS.

The `presets` property is required for Tailwind to [know which presets to use](https://tailwindcss.com/docs/presets). It should include the `orbitComponentsPreset` function, which returns the Orbit Tailwind preset.

The `foundation` option is optional and needed only in case you want use your custom theme configuration. It accepts an object with the same structure as Orbit foundation.

## Usage

As an example, the classes applied below become available right away. They apply, respectively, the CSS properties `color` with the value of the palette token `blueNormal` and `padding` with the value of the spacing token `small`. Both tokens are available on the `@kiwicom/orbit-design-tokens` package.

```html
<p class="text-blue-normal p-sm">...</p>
```

Notice that other component-specific classes will also be available. However, they are not expected to be used outside of Orbit's internal development. They are not documented and Orbit is not responsible for possible breaking changes that might occur by its usage in other projects.
