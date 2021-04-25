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
      href="https://kiwi.com"
      external
    />
  ),
  info: {
    title: "Tiles as links",
    description:
      "When passed the href prop, tiles automatically render as a elements. If passed the external prop, they will automatically open in a new window with noopener and noreferrer as values for the rel attribute for security.",
  },
};
