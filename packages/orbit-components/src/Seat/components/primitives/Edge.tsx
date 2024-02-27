import * as React from "react";
import cx from "clsx";

import { TYPES } from "../../consts";
import type { Type } from "../../types";

interface Props {
  type: Type;
  d: string;
}

const Edge = ({ type, d }: Props) => {
  return (
    <path
      className={cx(
        type === TYPES.LEGROOM && "fill-blue-light-active",
        type === TYPES.DEFAULT && "fill-product-light-active",
        type === TYPES.UNAVAILABLE && "fill-cloud-light-active",
      )}
      d={d}
    />
  );
};

export default Edge;
