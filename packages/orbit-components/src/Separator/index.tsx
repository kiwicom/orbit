"use client";

import * as React from "react";
import cx from "clsx";

import type { Props, Align } from "./types";
import { getSpaceAfterClasses } from "../common/tailwind";

const BORDER_TYPE_CLASSES = {
  none: "border-none",
  solid: "border-solid",
  dashed: "border-dashed",
  dotted: "border-dotted",
  double: "border-double",
} as const;

const enum Indent {
  none = "none",
  small = "small",
  medium = "medium",
  large = "large",
  XLarge = "XLarge",
  XXLarge = "XXLarge",
}

function getSideOffsetAmount(indent: keyof typeof Indent, align: Align) {
  const classes = {
    left: {
      [Indent.none]: "pe-0",
      [Indent.small]: "pe-300",
      [Indent.medium]: "pe-400",
      [Indent.large]: "pe-600",
      [Indent.XLarge]: "pe-800",
      [Indent.XXLarge]: "pe-1000",
    },
    right: {
      [Indent.none]: "ps-0",
      [Indent.small]: "ps-300",
      [Indent.medium]: "ps-400",
      [Indent.large]: "ps-600",
      [Indent.XLarge]: "ps-800",
      [Indent.XXLarge]: "ps-1000",
    },
    center: {
      [Indent.none]: "px-0",
      [Indent.small]: "px-300",
      [Indent.medium]: "px-400",
      [Indent.large]: "px-600",
      [Indent.XLarge]: "px-800",
      [Indent.XXLarge]: "px-1000",
    },
  };

  return classes[align][indent];
}

const Separator = ({
  align = "left",
  sideOffset = "none",
  spaceAfter,
  type = "solid",
  color,
}: Props) => {
  return (
    <div className={cx("box-border w-full", getSideOffsetAmount(sideOffset, align))}>
      <hr
        className={cx(
          "orbit-separator",
          "mt-0 box-border h-0 border-t",
          color || "border-elevation-flat-border-color",
          BORDER_TYPE_CLASSES[type],
          spaceAfter && getSpaceAfterClasses(spaceAfter),
        )}
      />
    </div>
  );
};

export default Separator;
