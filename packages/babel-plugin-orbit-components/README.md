# babel-plugin-orbit-components

[![Build Status](https://travis-ci.org/kiwicom/babel-plugin-orbit-components.svg?branch=master)](https://travis-ci.org/kiwicom/babel-plugin-orbit-components)
[![codecov](https://codecov.io/gh/kiwicom/babel-plugin-orbit-components/branch/master/graph/badge.svg)](https://codecov.io/gh/kiwicom/babel-plugin-orbit-components)
[![styled with prettier](https://img.shields.io/badge/styled_with-prettier-ff69b4.svg)](https://github.com/prettier/prettier)
[![npm (scoped)](https://img.shields.io/npm/v/babel-plugin-orbit-components.svg)](https://www.npmjs.com/package/@kiwicom/babel-plugin-orbit-components)

Transforms destructured imports of `@kiwicom/orbit-components` to granular ones!

## Setup

Install:
* `yarn add -D @kiwicom/babel-plugin-orbit-components`

Then just add `@kiwicom/orbit-components` to the list of babel plugins, e.g. to `.babelrc`:

```json
{
  "plugins": ["@kiwicom/orbit-components"]
}
```

### Example

```js
// Input:
import { Alert } from "@kiwicom/orbit-components";

// Output:
import Alert from "@kiwicom/orbit-components/lib/Alert";
```

## License

MIT
