import * as React from "react";

import { SIZE_OPTIONS } from "./consts";
import TooltipPrimitive from "../primitives/TooltipPrimitive";
import useMediaQuery from "../hooks/useMediaQuery";
import MobileDialog from "../primitives/MobileDialogPrimitive";
import { Props } from "./types";

const Tooltip = ({
  children,
  enabled = true,
  tabIndex = "0",
  dataTest,
  size = SIZE_OPTIONS.SMALL,
  content,
  id,
  placement,
  lockScrolling,
  renderInPortal = true,
  stopPropagation = false,
  removeUnderlinedText,
  block = false,
}: Props) => {
  const { isLargeMobile } = useMediaQuery();
  return isLargeMobile ? (
    <TooltipPrimitive
      dataTest={dataTest}
      id={id}
      tabIndex={tabIndex}
      enabled={enabled}
      content={content}
      size={size}
      renderInPortal={renderInPortal}
      placement={placement}
      stopPropagation={stopPropagation}
      removeUnderlinedText={removeUnderlinedText}
      block={block}
    >
      {children}
    </TooltipPrimitive>
  ) : (
    <MobileDialog
      dataTest={dataTest}
      tabIndex={tabIndex}
      id={id}
      enabled={enabled}
      lockScrolling={lockScrolling}
      content={content}
      removeUnderlinedText={removeUnderlinedText}
      stopPropagation={stopPropagation}
      block={block}
    >
      {children}
    </MobileDialog>
  );
};

export default Tooltip;
