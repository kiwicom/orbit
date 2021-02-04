# eslint-plugin-orbit-components

Collection of ESLint rules to enforce the best usage practices of [`@kiwicom/orbit-components`](https://github.com/kiwicom/orbit-components/).

## Installation

Assuming you already have ESLint installed, run:

```sh
# npm
npm install eslint-plugin-orbit-components --save-dev

# yarn
yarn add eslint-plugin-orbit-components --dev
```

Then add it to your ESLint configuration:

```
{
  "plugins": [
    // ...
    "orbit-components"
  ],
  "rules": {
    // ...
    "orbit-components/button-has-title": "error",
    "orbit-components/unnecessary-text": "error",
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

- [button-has-title](https://github.com/kiwicom/eslint-plugin-orbit-components/blob/master/docs/rules/button-has-title.md): Enforces that `Button` and `ButtonLink` do have either `children` or `title` property.
- [unnecessary-text](https://github.com/kiwicom/eslint-plugin-orbit-components/blob/master/docs/rules/unnecessary-text.md): Enforces that children of `Button` or `Heading` are not wrapped in `Text` component.

## License

MIT
