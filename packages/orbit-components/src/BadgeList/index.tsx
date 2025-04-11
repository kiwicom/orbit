"use client";

import * as React from "react";
import cx from "clsx";

import type { Props } from "./types";
import { getSpacingClasses } from "../common/tailwind";
import { SPACINGS } from "../utils/layout/consts";

const BadgeList = ({
  children,
  dataTest,
  id,
  ariaLabel,
  spacing = SPACINGS.ONE_HUNDRED,
}: Props) => {
  return (
    <ul
      className={cx(
        "orbit-badge-list m-0 flex flex-col p-0",
        spacing && getSpacingClasses(spacing, undefined, "column"),
      )}
      data-test={dataTest}
      id={id}
      aria-label={ariaLabel}
    >
      {children}
    </ul>
  );
};

export { default as BadgeListItem } from "./BadgeListItem";
export default BadgeList;
