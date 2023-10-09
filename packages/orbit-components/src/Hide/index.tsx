"use client";

import React from "react";
import cx from "clsx";

import type { Props } from "./types";

const Hide = ({ on = [], block, children }: Props) => (
  <div
    className={cx(block ? "block" : "inline-block", {
      "sm-mm:hidden": on.includes("smallMobile"),
      "mm-lm:hidden": on.includes("mediumMobile"),
      "lm-tb:hidden": on.includes("largeMobile"),
      "tb-de:hidden": on.includes("tablet"),
      "de-ld:hidden": on.includes("desktop"),
      "ld:hidden": on.includes("largeDesktop"),
    })}
  >
    {children}
  </div>
);

export default Hide;
