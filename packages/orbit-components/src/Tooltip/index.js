// @flow
import React from "react";

import { SIZE_OPTIONS } from "./consts";
import TooltipPrimitive from "../primitives/TooltipPrimitive";

import type { Props } from "./index";

const Tooltip = ({
  children,
  enabled = true,
  tabIndex = "0",
  dataTest,
  size = SIZE_OPTIONS.SMALL,
  content,
  preferredPosition,
  preferredAlign,
  stopPropagation = false,
  removeUnderlinedText,
}: Props) => {
  return (
    <TooltipPrimitive
      dataTest={dataTest}
      tabIndex={tabIndex}
      enabled={enabled}
      content={content}
      size={size}
      preferredPosition={preferredPosition}
      preferredAlign={preferredAlign}
      stopPropagation={stopPropagation}
      removeUnderlinedText={removeUnderlinedText}
    >
      {children}
    </TooltipPrimitive>
  );
};

export default Tooltip;
