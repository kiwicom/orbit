"use client";

import * as React from "react";
import cx from "clsx";

import {
  TYPE_OPTIONS,
  WEIGHT_OPTIONS,
  ELEMENT_OPTIONS,
  ALIGN_OPTIONS,
  SIZE_OPTIONS,
} from "./consts";
import type { Props } from "./types";
import { spaceAfterClasses, textAlignClasses, getMargin } from "../common/tailwind";
import {
  backgroundClasses,
  sizeClasses,
  textLinkCommonClasses,
  typeClasses,
  weightClasses,
} from "./helpers/twClasses";

const Text = ({
  type = TYPE_OPTIONS.PRIMARY,
  size = SIZE_OPTIONS.NORMAL,
  weight = WEIGHT_OPTIONS.NORMAL,
  align = ALIGN_OPTIONS.START,
  margin,
  as: Component = ELEMENT_OPTIONS.P,
  uppercase,
  italic,
  strikeThrough,
  dataTest,
  spaceAfter,
  children,
  withBackground,
  id,
}: Props) => {
  const { vars: cssVars, classes: marginClasses } = getMargin(margin);

  return (
    <Component
      id={id}
      data-test={dataTest}
      className={cx(
        "orbit-text font-base",
        uppercase && "uppercase",
        strikeThrough && "line-through",
        italic && "italic",
        sizeClasses[size],
        weightClasses[weight],
        typeClasses[type],
        withBackground && backgroundClasses[type],
        textAlignClasses[align],
        spaceAfter && spaceAfterClasses[spaceAfter],
        ...marginClasses,
        ...textLinkCommonClasses,
      )}
      style={cssVars}
    >
      {children}
    </Component>
  );
};

export default Text;
