import React from "react";

import Airplane from "../icons/Airplane";

import Tile from ".";

export default function TileStory() {
  return (
    <div className="space-y-200">
      <Tile>Tile child</Tile>
      <Tile noPadding>Tile child</Tile>
      <Tile title="Tile" />
      <Tile title="Tile" icon={<Airplane ariaHidden />} />
      <Tile title="Tile" description="Tile description" />
      <Tile title="Tile">Tile child</Tile>
      <Tile header="Tile header" />
      <Tile header="Tile header" noHeaderIcon />
      <Tile expandable title="Tile">
        Tile expandable
      </Tile>
      <Tile expandable expanded title="Tile">
        Tile expanded
      </Tile>
      <Tile dataTest="tile-hover">Tile hover</Tile>
    </div>
  );
}
