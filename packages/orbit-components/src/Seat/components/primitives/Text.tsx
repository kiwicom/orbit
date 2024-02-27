import * as React from "react";
import cx from "clsx";

import { TYPES } from "../../consts";
import type { SeatVariantProps } from "../../types";

type Props = {
  fontSize: number;
} & SeatVariantProps;

const Text = ({ selected, type, label, fontSize }: Props) => {
  return (
    <text
      className={cx(
        selected && "fill-white-normal",
        !selected && type === TYPES.LEGROOM && "fill-blue-dark",
        !selected && type === TYPES.DEFAULT && "fill-product-dark",
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
