# orbit-design-tokens
Design tokens store visual design attributes. They help us make our UI more consistent and consistent and support custom theming. We use them instead of static values like HEX codes for color or sizing units.

## Installation
First thing you will need to do is install the package into your project. 

Run [npm](https://www.npmjs.com/) to add the package to your project:

`npm install --save @kiwicom/orbit-design-tokens`

or do so with [Yarn](https://yarnpkg.com/):

`yarn add @kiwicom/orbit-design-tokens`

## How to use
Now that you have installed the latest version of the package, you will need to add an import directly into the file where you want to use the design tokens.

For simple usage of defaultTokens just add this line of code to the top of the file:

`import { defaultTokens } from "@kiwicom/orbit-design-tokens"`
 
Now you can use tokens by typing `defaultTokens` and just continue with the dot-notation by typing the appropriate token name you want to use f.e. `defaultTokens.colorTextPrimary`. More advanced text editors should suggest which tokens are available to you in the token object, so you can find tokens quicker than by typing the entire token name.

### Generating your own theme

From version 0.0.9 there is possibility to change tokens and colors values also. Just simply import `getTokens` from this package.

You can generate a new theme with your colors simply like this:

```jsx
import { getTokens } from "@kiwicom/orbit-design-tokens"

// define your colors
const colors = {
  product: {
    light: "#ff9999",
    lightHover: "#ff7f7f",
    lightActive: "#ff6666",
    normal: "#ff0000",
    normalHover: "#e50000",
    normalActive: "#cc0000",
    dark: "#990000",
  },
};

const theme = getTokens(colors);
```

For usage with NEST, which contains plant object with palette colors, you can use function `fromPlainObject`.

**Example:**
```jsx
import { fromPlainObject } from "@kiwicom/orbit-design-tokens"

// from NEST
const palette = {
  productLight: "#ff9999",
  productLightHover: "#ff7f7f",
  productLightActive: "#ff6666",
  productNormal: "#ff0000",
  productNormalHover: "#e50000",
  productNormalActive: "#cc0000",
  productDark: "#990000",
};

const theme = fromPlainObject(theme);
```

## Full list of design tokens
If you are unsure which tokens are in this package included, see (https://orbit.kiwi/design-tokens/).

## Formats
The main structure of the package is written in `JavaScript` for better usage in `JavaScript` projects. We are also able to generate a `JSON` file which will allow us to transform this type of file into different ones. It should be possible to transform `JSON` into `SASS`, `LESS`, `Stylus`, `XML` or others.

## Naming conventions
Every design token in the package has a name suggested according to the Orbit naming conventions. These conventions should be systematic, and work according to the following template:

`property_usage-type--state`

More information about adding new tokens is described in [How to add a new token](#how-to-add-a-new-token)

## How to add a new token
If you want to add a new token to the repository, first you will need to create a [new issue](https://github.com/kiwicom/orbit-design-tokens/issues). After you click on the new issue button you will see two sections:
1. `Description` - You should describe why you're adding a new token and for which component it's needed.
2. `Table` - Here you can add your new tokens. You have to fill a `Default name` (Name according to our naming conventions), `CamelCase name` (Default name in CamelCase) and `Value` cell. 

Creating a new Issue       | Preview of the Issue
:-------------------------:|:-------------------------:
![](https://bit.ly/2vqKFS1)|![](https://bit.ly/2qIUIgB)

After posting the issue you will have to wait until someone approves the request. Some suggested tokens will be published in upcoming versions of the package. If you have questions, please feel free to contact **@honza** or **@william.kolmacka** on Slack.
