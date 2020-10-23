// @flow
import * as React from "react";

import { SIZE_OPTIONS } from "./consts";
import TooltipPrimitive from "../primitives/TooltipPrimitive";
import useMediaQuery from "../hooks/useMediaQuery";
import MobileDialog from "../primitives/MobileDialogPrimitive";

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
  const { isLargeMobile } = useMediaQuery();
  return isLargeMobile ? (
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
  ) : (
    <MobileDialog
      dataTest={dataTest}
      tabIndex={tabIndex}
      enabled={enabled}
      content={content}
      removeUnderlinedText={removeUnderlinedText}
      stopPropagation={stopPropagation}
    >
      {children}
    </MobileDialog>
  );
};

export default Tooltip;
