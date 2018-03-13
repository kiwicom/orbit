# Kiwi Icons

## Usage

You can import any icon and use it as a React component:

```js
import React from "react";
import { Airplane } from "@kiwicom/orbit-components/icons";

const AirplaneTitle = label => (
  <h1>
    <Airplane fill="#0097A9" height="14" />
    {label}
  </h1>
);
```

Every icon is just a simple piece of inline SVG, see [the code of one of them](./airplane.jsx).

All props are passed to the `svg` element, so you can override its default `height` and `fill`. Eg. `<Airplane fill="red" height="100" />` to render a 100px red airplane. You can find [other attributes on MDN](https://developer.mozilla.org/en-US/docs/Web/SVG/Element/svg), but these two will be probably the only ones you will use.

## Included Icons

See the generated [preview of all icons](./icons.md).

## Build Process

In the `svg` folder, there are source SVG files as delivered by our designers. The build script (`bin/build.js`) that executes when you run `yarn build` processes all of them, optimizes them and transforms into JSX in the `jsx` folder. This script also generates previews in the `png` folder. That JSX is then transpiled with Babel into the `lib` folder.

Note that this works only for simple single color icons. If we will be adding more advanced graphics in the future (colorful logos etc.), it will require a different approach.

### Fixing Rotation Or Flipping

The build script takes only the content of the `defs` element and throws away everything else. That works well for most of our icons, but not for icons that were created by rotation or flipping of another icon.

I'm fixing it manually - for example for the ChevronLeft icon I take the path from ChevronUp, place it to `defs` and add a [`transform` attribute](https://developer.mozilla.org/en-US/docs/Web/SVG/Attribute/transform) to that path.

* Rotate 90 degrees: `transform="rotate(90, 16, 16)"`
* Flip horizontaly: `transform="translate(0,32) scale(1, -1)"`
