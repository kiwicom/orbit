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

const TransitionPathFill = ({ children, type, selected, status, ...props }: Props) => {
  const effectiveStatus = status ?? (selected ? "selected" : "default");
  const isSelected = effectiveStatus === "selected";
  const isProcessingOrDone = effectiveStatus === "processing" || effectiveStatus === "done";

  return (
    <path
      className={cx(
        "duration-fast transition-colors ease-in",
        type === TYPES.LEGROOM &&
          (isSelected
            ? "fill-blue-normal group-focus-visible:fill-blue-normal-hover group-active:fill-blue-normal-hover"
            : "fill-blue-light group-hover:fill-blue-light-hover group-focus-visible:fill-blue-light-active group-active:fill-blue-light-active"),
        type === TYPES.DEFAULT &&
          (isSelected || isProcessingOrDone
            ? "fill-product-light-active group-focus-visible:fill-product-normal-hover group-active:fill-product-normal-hover"
            : "fill-product-light group-hover:fill-product-light-hover group-focus-visible:fill-product-light-active group-active:fill-product-light-active"),
        type === TYPES.UNAVAILABLE && "fill-cloud-light",
      )}
      {...props}
    >
      {children}
    </path>
  );
};

export default TransitionPathFill;
