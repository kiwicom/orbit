// @flow
import * as React from "react";

import Tile from "../index";
import * as Icons from "../../icons";

export default {
  Example: (): React.Node => (
    <Tile
      icon={<Icons.Airplane ariaLabel="Flight" />}
      title="More flights"
      description="Find more flights to get you anywhere you want to go."
      onClick={() => {
        window.location = "https://kiwi.com";
      }}
    />
  ),
  info: {
    title: "Tile with title and description",
    description: "Tiles can include titles and descriptions to make their action clear.",
  },
};
