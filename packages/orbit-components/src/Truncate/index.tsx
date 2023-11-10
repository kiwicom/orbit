"use client";

import * as React from "react";
import cx from "clsx";

import type { Props } from "./types";

const Truncate = ({ children, maxWidth = "100%", dataTest }: Props) => (
  <div
    data-test={dataTest}
    className={cx(
      "min-w-0 max-w-[--truncate-max-width] shrink grow-0",
      maxWidth === "none" ? "basis-full" : "basis-[--truncate-max-width]",
    )}
    style={{ "--truncate-max-width": maxWidth } as React.CSSProperties}
  >
    <div className={cx("truncate [&_.orbit-heading]:truncate [&_.orbit-text]:truncate")}>
      {children}
    </div>
  </div>
);

export default Truncate;
