# Kiwi Icons

## Usage

You can import any icon and use it as a React component:

```js
import React from "react";
import Airplane from "@kiwicom/orbit-components/lib/icons/Airplane";

const TextWithIcon = text => (
  <span>
    <Airplane color="attention" />
    {text}
  </span>
);
```

## Props

As we want to ensure consistency, all icons are restricted to `color`, `customColor`, `size` and `className` prop.

For icons we are using four predefined colors **primary**, **secondary**, **terciary** and **attention** and three predefined sizes **small**, **normal** and **large**.

In edge cases you can specify `customColor` and overwrite predefined colors. You have also possibility to set `className`.

If you are not sure which settings to use, see *Icons* in our [storybook](https://kiwicom.github.io/orbit-components/?selectedKind=Icon&selectedStory=Default).

## Included Icons

See the generated [preview of all icons](./icons.md).

## Build Process

In the `svg` folder, there are source SVG files as delivered by our designers. When you run `yarn build`, the build script (`config/build.js`) processes, optimizes and transforms all of them into React components. This script also generates previews in the `png` folder. Those JS files are then transpiled with Babel and copied to the `lib` folder.
