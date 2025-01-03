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
      [Indent.none]: "w-full",
      [Indent.THREE_HUNDRED]: "w-[calc(100%_-_theme(spacing.300))]",
      [Indent.FOUR_HUNDRED]: "w-[calc(100%_-_theme(spacing.400))]",
      [Indent.SIX_HUNDRED]: "w-[calc(100%_-_theme(spacing.600))]",
      [Indent.EIGHT_HUNDRED]: "w-[calc(100%_-_theme(spacing.800))]",
      [Indent.ONE_THOUSAND]: "w-[calc(100%_-_theme(spacing.1000))]",
    },
    right: {
      [Indent.none]: "w-full",
      [Indent.THREE_HUNDRED]: "ms-300 w-[calc(100%_-_theme(spacing.300))]",
      [Indent.FOUR_HUNDRED]: "ms-400 w-[calc(100%_-_theme(spacing.400))]",
      [Indent.SIX_HUNDRED]: "ms-600 w-[calc(100%_-_theme(spacing.600))]",
      [Indent.EIGHT_HUNDRED]: "ms-800 w-[calc(100%_-_theme(spacing.800))]",
      [Indent.ONE_THOUSAND]: "ms-1000 w-[calc(100%_-_theme(spacing.1000))]",
    },
    center: {
      [Indent.none]: "w-full",
      [Indent.THREE_HUNDRED]: "ms-300 w-[calc(100%_-_theme(spacing.300)*2)]",
      [Indent.FOUR_HUNDRED]: "ms-400 w-[calc(100%_-_theme(spacing.400)*2)]",
      [Indent.SIX_HUNDRED]: "ms-600 w-[calc(100%_-_theme(spacing.600)*2)]",
      [Indent.EIGHT_HUNDRED]: "ms-800 w-[calc(100%_-_theme(spacing.800)*2)]",
      [Indent.ONE_THOUSAND]: "ms-1000 w-[calc(100%_-_theme(spacing.1000)*2)]",
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
  label,
}: Props) => {
  return (
    <div className={cx("relative min-h-px w-full", spaceAfter && getSpaceAfterClasses(spaceAfter))}>
      <hr
        className={cx(
          "orbit-separator",
          "absolute start-0 top-1/2 mt-0 box-border -translate-y-1/2 border-t",
          color || "border-elevation-flat-border-color",
          getSideOffsetAmount(sideOffset, align),
          BORDER_TYPE_CLASSES[type],
        )}
      />
      {label && (
        <span className="bg-white-normal px-100 absolute left-1/2 top-1/2 min-w-max -translate-x-1/2 -translate-y-1/2">
          {label}
        </span>
      )}
    </div>
  );
};

export default Separator;
