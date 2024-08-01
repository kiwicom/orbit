import * as React from "react";

import { ICON_SIZES, ICON_COLORS } from "./consts";
import * as Icons from "../icons";

export default function IconVisualStory() {
  return (
    <div className="gap-y-600 p-200">
      <div className="gap-x-200">
        {Object.values(ICON_COLORS).map(color => (
          <Icons.Airplane color={color} />
        ))}
        <Icons.Airplane customColor="purple" />
      </div>

      <div className="gap-x-200">
        {Object.values(ICON_SIZES).map(size => (
          <Icons.Airplane size={size} />
        ))}
      </div>

      <div className="gap-x-200">
        {Object.entries(Icons).map(([name, Icon]) => (
          <Icon key={name} />
        ))}
      </div>
    </div>
  );
}
