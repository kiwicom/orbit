# babel-plugin-orbit-components

[![Build Status](https://travis-ci.org/kiwicom/babel-plugin-orbit-components.svg?branch=master)](https://travis-ci.org/kiwicom/babel-plugin-orbit-components)

Transforms destructured imports of `@kiwicom/orbit-components` to granular ones!

## Setup

Install:

- `yarn add -D @kiwicom/babel-plugin-orbit-components`

Then just add `@kiwicom/orbit-components` to the list of babel plugins, e.g. to `.babelrc`:

```json
{
  "plugins": ["@kiwicom/orbit-components"]
}
```

### Examples

```js
// Input:
import { Alert } from '@kiwicom/orbit-components';

// Output:
import Alert from '@kiwicom/orbit-components/lib/Alert';
```

```js
// Input
import { Passengers } from '@kiwicom/orbit-components/lib/icons';

// Output
import Passengers from '@kiwicom/orbit-components/lib/icons/Passengers';
```

## License

MIT
