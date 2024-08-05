"use client";

import * as React from "react";
import cx from "clsx";

import type { Props, Align, SideOffset } from "./types";
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
  THREE_HUNDRED = "300",
  FOUR_HUNDRED = "400",
  SIX_HUNDRED = "600",
  EIGHT_HUNDRED = "800",
  ONE_THOUSAND = "1000",
}

function getSideOffsetAmount(indent: SideOffset, align: Align) {
  const classes = {
    left: {
      [Indent.none]: "pe-0",
      [Indent.THREE_HUNDRED]: "pe-300",
      [Indent.small]: "pe-300", // deprecated
      [Indent.FOUR_HUNDRED]: "pe-400",
      [Indent.medium]: "pe-400", // deprecated
      [Indent.SIX_HUNDRED]: "pe-600",
      [Indent.large]: "pe-600", // deprecated
      [Indent.EIGHT_HUNDRED]: "pe-800",
      [Indent.XLarge]: "pe-800", // deprecated
      [Indent.ONE_THOUSAND]: "pe-1000",
      [Indent.XXLarge]: "pe-1000", // deprecated
    },
    right: {
      [Indent.none]: "ps-0",
      [Indent.THREE_HUNDRED]: "ps-300",
      [Indent.small]: "ps-300", // deprecated
      [Indent.FOUR_HUNDRED]: "ps-400",
      [Indent.medium]: "ps-400", // deprecated
      [Indent.SIX_HUNDRED]: "ps-600",
      [Indent.large]: "ps-600", // deprecated
      [Indent.EIGHT_HUNDRED]: "ps-800",
      [Indent.XLarge]: "ps-800", // deprecated
      [Indent.ONE_THOUSAND]: "ps-1000",
      [Indent.XXLarge]: "ps-1000", // deprecated
    },
    center: {
      [Indent.none]: "px-0",
      [Indent.THREE_HUNDRED]: "px-300",
      [Indent.small]: "px-300", // deprecated
      [Indent.FOUR_HUNDRED]: "px-400",
      [Indent.medium]: "px-400", // deprecated
      [Indent.SIX_HUNDRED]: "px-600",
      [Indent.large]: "px-600", // deprecated
      [Indent.EIGHT_HUNDRED]: "px-800",
      [Indent.XLarge]: "px-800", // deprecated
      [Indent.ONE_THOUSAND]: "px-1000",
      [Indent.XXLarge]: "px-1000", // deprecated
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
