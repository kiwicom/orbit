"use client";

import React from "react";
import cx from "clsx";

import type { Props } from "./types";

const Hide = ({ on = [], block, children }: Props) => (
  <div
    className={cx(block ? "block" : "inline-block", {
      "sm:max-mm:hidden": on.includes("smallMobile"),
      "mm:max-lm:hidden": on.includes("mediumMobile"),
      "lm:max-tb:hidden": on.includes("largeMobile"),
      "tb:max-de:hidden": on.includes("tablet"),
      "de:max-ld:hidden": on.includes("desktop"),
      "ld:hidden": on.includes("largeDesktop"),
    })}
  >
    {children}
  </div>
);

export default Hide;
