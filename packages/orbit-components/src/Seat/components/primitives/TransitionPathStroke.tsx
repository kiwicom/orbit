import * as React from "react";
import cx from "clsx";

import { TYPES } from "../../consts";
import type { Type, SeatStatus } from "../../types";

type Props = {
  type: Type;
  selected?: boolean;
  status?: SeatStatus;
} & React.SVGProps<SVGPathElement> &
  React.PropsWithChildren;

const TransitionPathStroke = ({ children, type, selected, status, ...props }: Props) => {
  const effectiveStatus = status ?? (selected ? "selected" : "default");
  const isSelected = effectiveStatus === "selected";
  const isProcessingOrDone = effectiveStatus === "processing" || effectiveStatus === "done";

  return (
    <path
      className={cx(
        "duration-fast transition-colors ease-in",
        type === TYPES.LEGROOM &&
          (isSelected
            ? "stroke-blue-normal group-focus-visible:stroke-blue-normal-hover group-active:stroke-blue-normal-hover"
            : "stroke-blue-light-active"),
        type === TYPES.DEFAULT &&
          (isSelected || isProcessingOrDone
            ? "stroke-product-normal group-focus-visible:stroke-product-normal-hover group-active:stroke-product-normal-hover"
            : "stroke-product-light-active"),
        type === TYPES.UNAVAILABLE && "stroke-cloud-light-active",
      )}
      strokeWidth="2"
      {...props}
    >
      {children}
    </path>
  );
};

export default TransitionPathStroke;
