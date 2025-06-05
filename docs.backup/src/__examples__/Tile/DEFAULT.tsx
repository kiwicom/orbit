import React from "react";
import { Tile, Text, OrbitProvider, defaultTheme } from "@kiwicom/orbit-components";

export default {
  Example: () => (
    <OrbitProvider theme={defaultTheme}>
      <Tile
        href="https://orbit.kiwi/design-patterns/progressive-disclosure/"
        title="Read more about progressive disclosure"
      >
        <Text>Content</Text>
      </Tile>
    </OrbitProvider>
  ),
  exampleKnobs: [
    {
      component: "Tile",
      knobs: [
        { name: "icon", type: "icon", defaultValue: "" },
        { name: "external", type: "boolean", defaultValue: false },
        { name: "noPadding", type: "boolean", defaultValue: false },
        { name: "initialExpanded", type: "boolean", defaultValue: false },
        { name: "expandable", type: "boolean", defaultValue: true },
        { name: "title", type: "text", defaultValue: "Read more about progressive disclosure" },
        { name: "description", type: "text", defaultValue: "" },
      ],
    },
  ],
};
