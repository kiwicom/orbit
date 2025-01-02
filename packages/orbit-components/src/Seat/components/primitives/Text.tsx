import * as React from "react";
import cx from "clsx";

import { TYPES } from "../../consts";
import type { SeatVariantProps, SeatStatus } from "../../types";

type Props = {
  fontSize: number;
} & SeatVariantProps;

const Text = ({ selected, status, type, label, fontSize }: Props) => {
  const effectiveStatus = status ?? (selected ? "selected" : "default");
  const isSelected = effectiveStatus === "selected";
  const isProcessingOrDone = effectiveStatus === "processing" || effectiveStatus === "done";
  
  return (
    <text
      className={cx(
        (isSelected || isProcessingOrDone) && "fill-product-darker font-bold",
        !isSelected && !isProcessingOrDone && type === TYPES.LEGROOM && "fill-blue-dark",
        !isSelected && !isProcessingOrDone && type === TYPES.DEFAULT && "fill-product-dark",
      )}
      xmlSpace="preserve"
      fontSize={fontSize}
      letterSpacing="0em"
      textAnchor="middle"
      dominantBaseline="middle"
      x="50%"
      y="55%"
    >
      {label}
    </text>
  );
};

export default Text;
