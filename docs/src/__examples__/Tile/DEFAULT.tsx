import * as React from "react";
import { Tile } from "@kiwicom/orbit-components";

export default {
  Example: () => (
    <Tile
      onClick={() => {
        window.location.href = "https://orbit.kiwi/guides/progressive-disclosure/";
      }}
    >
      Read more about progressive disclosure
    </Tile>
  ),
  info: {
    title: "Default tile",
    description: "By default, tiles act as a wrapper to add an action to content.",
  },
};
