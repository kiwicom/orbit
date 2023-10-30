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
      [Indent.small]: "pe-sm",
      [Indent.medium]: "pe-md",
      [Indent.large]: "pe-lg",
      [Indent.XLarge]: "pe-xl",
      [Indent.XXLarge]: "pe-xxl",
    },
    right: {
      [Indent.none]: "ps-0",
      [Indent.small]: "ps-sm",
      [Indent.medium]: "ps-md",
      [Indent.large]: "ps-lg",
      [Indent.XLarge]: "ps-xl",
      [Indent.XXLarge]: "ps-xxl",
    },
    center: {
      [Indent.none]: "px-0",
      [Indent.small]: "px-sm",
      [Indent.medium]: "px-md",
      [Indent.large]: "px-lg",
      [Indent.XLarge]: "px-xl",
      [Indent.XXLarge]: "px-xxl",
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
