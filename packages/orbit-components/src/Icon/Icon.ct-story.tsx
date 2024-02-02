import * as React from "react";

import { ICON_SIZES, ICON_COLORS } from "./consts";
import * as Icons from "../icons";

export default function IconVisualStory() {
  return (
    <div className="gap-y-lg p-xs">
      <div className="gap-x-xs">
        {Object.values(ICON_COLORS).map(color => (
          <Icons.Airplane color={color} />
        ))}
        <Icons.Airplane customColor="purple" />
      </div>

      <div className="gap-x-xs">
        {Object.values(ICON_SIZES).map(size => (
          <Icons.Airplane size={size} />
        ))}
      </div>

      <div className="gap-x-xs">
        {Object.entries(Icons).map(([name, Icon]) => (
          <Icon key={name} />
        ))}
      </div>
    </div>
  );
}
