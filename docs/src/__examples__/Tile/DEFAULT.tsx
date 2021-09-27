import React from "react";
import { Tile, Text } from "@kiwicom/orbit-components";
import { Visibility } from "@kiwicom/orbit-components/icons";

export default {
  Example: () => (
    <Tile
      href="https://orbit.kiwi/design-patterns/progressive-disclosure/"
      icon={<Visibility />}
      title="Read more about progressive disclosure"
    >
      <Text>Content</Text>
    </Tile>
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
