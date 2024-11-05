import React from "react";

import { PLACEMENTS } from "../../common/placements";
import Stack from "../../Stack";
import Text from "../../Text";
import type { Props } from "./types";

import TooltipPrimitive from ".";

export const tooltipContentCtStory = <Text>Lorem ipsum.</Text>;

type TooltipPrimitiveProps = Pick<Props, "size" | "removeUnderlinedText" | "error" | "help">;

export function TooltipPrimitiveVisualDefaultStory({
  size = "medium",
  removeUnderlinedText,
  error,
  help,
}: TooltipPrimitiveProps) {
  return (
    <div className="min-h-[96px]">
      <TooltipPrimitive
        content={tooltipContentCtStory}
        error={error}
        help={help}
        removeUnderlinedText={removeUnderlinedText}
        size={size}
        tooltipShown
      >
        <Text>Tooltip.</Text>
      </TooltipPrimitive>
    </div>
  );
}

export function TooltipPrimitiveVariousPlacementsStory() {
  return (
    <div className="lm:grid-cols-3 mm:grid-cols-2 lm:grid-rows-4 mm:grid-rows-6 lm:min-h-[800px] grid min-h-[1300px] grid-cols-1">
      {Object.values(PLACEMENTS).map(placement => (
        <div className="p-200 relative flex size-full items-center">
          <Stack
            justify={
              // eslint-disable-next-line no-nested-ternary
              placement.includes("left") ? "end" : placement.includes("right") ? "start" : "center"
            }
          >
            <TooltipPrimitive content={tooltipContentCtStory} placement={placement} tooltipShown>
              <Text>Tooltip</Text>
            </TooltipPrimitive>
          </Stack>
        </div>
      ))}
    </div>
  );
}
