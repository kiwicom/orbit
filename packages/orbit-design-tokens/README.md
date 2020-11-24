# @kiwicom/orbit-design-tokens

Design tokens are atomic pieces that store visual design attributes. They help us make our UI more consistent and consistent and support custom themes. We use them instead of static values like HEX codes for color or sizing units.

## Installation

The first thing you will need to do is install the package into your project.

Run [npm](https://www.npmjs.com/) to add the package to your project:

`npm install --save @kiwicom/orbit-design-tokens`

or do so with [Yarn](https://yarnpkg.com/):

`yarn add @kiwicom/orbit-design-tokens`

## How to use

Now that you have installed the latest version of the package, you will need to add an import directly into the file where you want to use the design tokens.

For simple usage of defaultTokens just add this line of code to the top of the file:

```jsx
import { defaultTokens } from "@kiwicom/orbit-design-tokens";
```

Now you can use tokens by typing `defaultTokens` and just continue with the dot-notation by typing the appropriate token name you want to use f.e. `defaultTokens.colorTextPrimary`. More advanced text editors should suggest which tokens are available to you in the token object, so you can find tokens quicker than by typing the entire token name.

### Generating your theme

**orbit-design-tokens** offers a possibility to generate different themes based on the inputted foundations.

First, simply import `getTokens` function to your project.

```jsx
import { getTokens } from "@kiwicom/orbit-design-tokens";
```

Now define your foundations that will be used to generated design tokens.

```jsx
const foundation = {
  palette: {
    product: {
      light: "#ff9999",
      lightHover: "#ff7f7f",
      lightActive: "#ff6666",
      normal: "#ff0000",
      normalHover: "#e50000",
      normalActive: "#cc0000",
      dark: "#990000",
      darkHover: "#720000",
      darkActive: "#630000",
      darker: "#530000",
    },
  },
  base: {
    fontFamily: "sans-serif",
    fontSizeSm: "14px",
    fontSizeMd: "16px",
    fontSizeLg: "18px",
    borderRadius: "6px",
  },
};

// generate your custom theme
const theme = getTokens(foundation);
```

> If you are unsure what foundation you can define, check this [docs](https://github.com/kiwicom/orbit/blob/master/.github/foundation.md).

For usage with NEST, which contains a plain object with palette colors, you can use `fromPlainObject` function.

```jsx
import { fromPlainObject } from "@kiwicom/orbit-design-tokens";

// example input from NEST
const palette = {
  productLight: "#ff9999",
  productLightHover: "#ff7f7f",
  productLightActive: "#ff6666",
  productNormal: "#ff0000",
  productNormalHover: "#e50000",
  productNormalActive: "#cc0000",
  productDark: "#990000",
  productDarkHover: "#890000",
  productDarkActive: "#7a0000",
  productDarker: "#5b0000",
};

const theme = fromPlainObject(theme);
```

> With the usage of `fromPlainObject` function, you can change only the product colors, not anything more.

## Full list of design tokens

If you are unsure which tokens are in this package included, see (https://orbit.kiwi/design-tokens/).

## Formats

The main structure of the package is written in `JavaScript` for better usage in `JavaScript` projects. We are also able to generate a `JSON` file which will allow us to transform this type of file into different ones. It should be possible to transform `JSON` into `SASS`, `LESS`, `Stylus`, `XML` or others.

## Naming conventions

Every design token in the package has a name suggested according to the **Orbit naming conventions**.

These conventions should be systematic, and work according to template: `property_usage-type--state`.

## Contributing

We are opened to bug reports and new token requests but, please use the correct template.
