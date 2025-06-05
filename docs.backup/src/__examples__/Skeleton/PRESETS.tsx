import React from "react";
import { OrbitProvider, Skeleton, defaultTheme } from "@kiwicom/orbit-components";

export default {
  Example: () => (
    <OrbitProvider theme={defaultTheme}>
      <Skeleton preset="List" />
    </OrbitProvider>
  ),
  exampleVariants: [
    {
      name: "List",
      code: `() => <Skeleton preset="List" />`,
    },
    {
      name: "Image",
      code: `() => <Skeleton preset="Image" />`,
    },
    {
      name: "Card",
      code: `() => <Skeleton preset="Card" />`,
    },
    {
      name: "Button",
      code: `() => <Skeleton preset="Button" />`,
    },
    {
      name: "Text",
      code: `() => <Skeleton preset="Text" />`,
    },
  ],
};
