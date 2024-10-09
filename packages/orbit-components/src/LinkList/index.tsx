"use client";

import * as React from "react";
import cx from "clsx";

import { SPACINGS } from "../utils/layout/consts";
import type { Props } from "./types";
import { getDirectionClasses, getSpacingClasses } from "../common/tailwind";

const LinkList = ({
  direction = "column",
  indent,
  legacy,
  useMargin = legacy,
  spacing = SPACINGS.FOUR_HUNDRED,
  children,
  dataTest,
}: Props) => (
  <ul
    data-test={dataTest}
    className={cx(
      "flex",
      "w-full",
      "m-0",
      "list-none",
      "text-normal",
      indent && "ps-100 p-0",
      direction && getDirectionClasses(direction),
      spacing && getSpacingClasses(spacing, undefined, direction, useMargin),
    )}
  >
    {React.Children.map(children, item => {
      if (!React.isValidElement(item)) return null;
      return (
        <li
          className={cx(
            "[&_.orbit-text-link]:no-underline",
            direction === "column" &&
              "tb:[&_.orbit-text-link]:w-auto w-full [&_.orbit-text-link]:w-full",
          )}
        >
          {item}
        </li>
      );
    })}
  </ul>
);

export default LinkList;
