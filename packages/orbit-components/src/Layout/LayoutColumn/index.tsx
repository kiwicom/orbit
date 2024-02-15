"use client";

import * as React from "react";
import cx from "clsx";

import type { Props } from "./types";

const LayoutColumn = ({ as: Component = "div", children, dataTest, spanEntireRow }: Props) => {
  return (
    // @ts-expect-error allow any component passed as string (TODO change the prop type to React.ElementType to fix this error)
    <Component
      className={cx(
        "max-lm:[&_.orbit-card]:-mx-md max-lm:[&_.orbit-card]:w-auto",
        spanEntireRow && "col-span-full",
      )}
      data-test={dataTest}
    >
      {children}
    </Component>
  );
};

export default LayoutColumn;
