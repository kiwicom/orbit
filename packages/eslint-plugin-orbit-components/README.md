# @kiwicom/eslint-plugin-orbit-components

> [!WARNING]
> This package is deprecated and will no longer be maintained.

Collection of ESLint rules to enforce the best usage practices of [`@kiwicom/orbit-components`](https://github.com/kiwicom/orbit-components/).

## Installation

Assuming you already have ESLint installed, run:

```sh
# npm
npm install @kiwicom/eslint-plugin-orbit-components --save-dev

# yarn
yarn add @kiwicom/eslint-plugin-orbit-components --dev
```

Then add it to your ESLint configuration:

```
{
  "plugins": [
    // ...
    "@kiwicom/eslint-plugin-orbit-components"
  ],
  "rules": {
    // ...
    "@kiwicom/orbit-components/button-has-title": "error",
    "@kiwicom/orbit-components/unnecessary-text": "error",
  }
}
```

or via extending our recommended config:

```
  {
    "extends": [
      "plugin:orbit-components/recommended",
    ]
  }
```

## Supported Rules

- [button-has-title](https://github.com/kiwicom/orbit/blob/master/packages/eslint-plugin-orbit-components/docs/rules/button-has-title.md): Enforces that `Button` and `ButtonLink` do have either `children` or `title` property.
- [unnecessary-text](https://github.com/kiwicom/orbit/blob/master/packages/eslint-plugin-orbit-components/docs/rules/unnecessary-text.md): Enforces that children of `Button` or `Heading` are not wrapped in `Text` component.
- [default-theme](https://github.com/kiwicom/orbit/blob/master/packages/eslint-plugin-orbit-components/docs/rules/default-theme.md):
  This rule aims to prevent the wrong usage of the defaultTheme object from @kiwicom/orbit-components
- [no-custom-colors](https://github.com/kiwicom/orbit/blob/master/packages/eslint-plugin-orbit-components/docs/rules/no-custom-colors.md):
  Prevents inconsistencies between Orbit and custom colors
- [no-custom-typography](https://github.com/kiwicom/orbit/blob/master/packages/eslint-plugin-orbit-components/docs/rules/no-custom-typography.md): This rule aims to prevent the usage of custom values for font-size, font-family and line-height CSS properties. Only some of the design tokens from @kiwicom/orbit-design-tokens should be used as a value.
- [prefer-single-destructure](https://github.com/kiwicom/orbit/blob/master/packages/eslint-plugin-orbit-components/docs/rules/prefer-single-destructure.md): Using too many arrow functions in interpolations can harm performance - because they have to be evaluated with execution context. This is done internally by wrapping all functions into the css helper from styled-components
- [rtl-utils](https://github.com/kiwicom/orbit/blob/master/packages/eslint-plugin-orbit-components/docs/rules/rtl-utils.md):
  Prevents bad theme.rtl patterns. Users often make the same mistake, they tend to use `theme.rtl` to apply RTL styles like right/left position, margins, and paddings. This rule should prevent such cases and enforce the usage of our RTL utility functions.
- [unique-id](https://github.com/kiwicom/orbit/blob/master/packages/eslint-plugin-orbit-components/docs/rules/unique-id.md):
  Rule prevents namespace collisions of the `id` HTML attribute. It often happens, that some elements can have the same ids. To prevent it in our codebase, it's better to use `randomID` utility function.
- [use-rtl](https://github.com/kiwicom/orbit/blob/master/packages/eslint-plugin-orbit-components/docs/rules/use-rtl.md):
  This rule aims to prevent RTL mistakes. A user can forget about RTL and use only static values, this rule should help to avoid that.

## License

MIT
