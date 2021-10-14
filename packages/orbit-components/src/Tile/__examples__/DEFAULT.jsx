// @flow
import * as React from "react";

import Tile from "../index";

export default {
  Example: (): React.Node => (
    <Tile
      onClick={() => {
        window.location = "https://orbit.kiwi/guides/progressive-disclosure/";
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
