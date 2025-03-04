import * as React from "react";
import cx from "clsx";

import type { Props } from "../types";

const TooltipWrapper = React.forwardRef<
  HTMLSpanElement,
  React.HTMLProps<HTMLSpanElement> & {
    block?: Props["block"];
    enabled?: Props["enabled"];
    removeUnderlinedText?: Props["removeUnderlinedText"];
  }
>(({ block, enabled, removeUnderlinedText, ...props }, ref) => {
  return (
    <span
      className={cx(
        "orbit-tooltip-wrapper",
        "h-fit max-w-full cursor-auto",
        "focus:outline-offset-1 active:outline-offset-1 [&_:disabled]:pointer-events-none",
        block ? "flex" : "inline-flex",
        enabled &&
          !removeUnderlinedText &&
          "[&_.orbit-text]:inline-block [&_.orbit-text]:underline [&_.orbit-text]:decoration-current [&_.orbit-text]:decoration-dotted",
      )}
      ref={ref}
      role="button"
      {...props}
    />
  );
});

export default TooltipWrapper;
