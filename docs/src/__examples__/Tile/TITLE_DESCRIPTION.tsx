import React from "react";
import { Tile } from "@kiwicom/orbit-components";
import { Airplane } from "@kiwicom/orbit-components/icons";

export default {
  Example: () => (
    <Tile
      icon={<Airplane ariaLabel="Flight" />}
      title="More flights"
      description="Find more flights to get you anywhere you want to go."
      onClick={() => {
        window.location.href = "https://kiwi.com";
      }}
    />
  ),
  info: {
    title: "Tile with title and description",
    description: "Tiles can include titles and descriptions to make their action clear.",
  },
};
