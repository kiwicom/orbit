import React from "react";

import { tooltipContentCtStory } from "../primitives/TooltipPrimitive/TooltipPrimitive.ct-story";
import Text from "../Text";

import Tooltip from ".";

export function TooltipVisualDefaultStory() {
  return (
    <div className="lm:min-h-[128px] min-h-[660px]">
      <Tooltip content={tooltipContentCtStory}>
        <Text>Tooltip.</Text>
      </Tooltip>
    </div>
  );
}
