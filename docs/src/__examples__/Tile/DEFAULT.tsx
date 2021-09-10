import React from "react";
import { Tile } from "@kiwicom/orbit-components";
import { Visibility } from "@kiwicom/orbit-components/icons";

export default {
  Example: () => (
    <Tile
      href="https://orbit.kiwi/design-patterns/progressive-disclosure/"
      icon={<Visibility />}
      title="Read more about progressive disclosure"
    />
  ),
  info: {
    title: "Default tile",
    description: "By default, tiles act as a wrapper to add an action to content.",
  },
};
