import * as React from "react";
import cx from "clsx";

import { TYPES } from "../../consts";
import type { Type } from "../../types";

type Props = {
  type: Type;
  selected: boolean;
} & React.SVGProps<SVGPathElement> &
  React.PropsWithChildren;

const TransitionPathStroke = ({ children, type, selected, ...props }: Props) => {
  return (
    <path
      className={cx(
        "duration-fast transition-colors ease-in",
        type === TYPES.LEGROOM &&
          (selected
            ? "stroke-blue-normal group-focus-visible:stroke-blue-normal-hover group-active:stroke-blue-normal-hover"
            : "stroke-blue-light-active"),
        type === TYPES.DEFAULT &&
          (selected
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
