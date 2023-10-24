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
const path = require("node:path");
const orbitComponentsPreset = require("@kiwicom/orbit-tailwind-preset");
// the following ensures the correct path is found (especially within monorepos)
const orbitComponentsPath = require
  .resolve("@kiwicom/orbit-components")
  .replace("/lib/index.js", "");

module.exports = {
  content: [
    // ...
    path.join(orbitComponentsPath, "**", "*.js"),
  ],
  // If you need, customize the base font family, e.g. with the System UI font stack (https://github.com/system-fonts/modern-font-stacks#system-ui)
  theme: {
    extend: {
      fontFamily: {
        base: "system-ui, sans-serif",
      },
    },
  },
  presets: [
    orbitComponentsPreset({
      disablePreflight: false, // default value
    }),
  ],
};
```

The `content` property is required for Tailwind to [know which files to scan for classes](https://tailwindcss.com/docs/content-configuration). It should include the path to all your source files that use Tailwind classes. The path to the `@kiwicom/orbit-components` package is required for the component-specific classes to be scanned and built into the final CSS. (The `require.resolve` ensures it works inside of monorepos too).

The `theme` property allows you to override some specific values of the default theme. In particular, if you need to customize the font family, you can change the `base` font family like in the example above.

The `presets` property is required for Tailwind to [know which presets to use](https://tailwindcss.com/docs/presets). It should include the `orbitComponentsPreset` function, which returns the Orbit Tailwind preset.

## Usage

As an example, the classes applied below become available right away. They apply, respectively, the CSS properties `color` with the value of the palette token `blueNormal` and `padding` with the value of the spacing token `small`. Both tokens are available on the `@kiwicom/orbit-design-tokens` package.

```html
<p class="text-blue-normal p-sm">...</p>
```

Notice that other component-specific classes will also be available. However, they are not expected to be used outside of Orbit's internal development. They are not documented and Orbit is not responsible for possible breaking changes that might occur by its usage in other projects.
