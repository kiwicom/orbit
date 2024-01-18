import React from "react";

import Tile from "../Tile";

import TileGroup from ".";

export default function TileStory() {
  return (
    <TileGroup>
      <Tile expandable title="Tile">
        Tile expandable
      </Tile>
      <Tile expandable title="Tile">
        Tile expandable
      </Tile>
      <Tile expandable title="Tile">
        Tile expandable
      </Tile>
    </TileGroup>
  );
}
