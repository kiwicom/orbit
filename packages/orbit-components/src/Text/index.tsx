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
import { spaceAfterClasses } from "../common/tailwind/spaceAfter";
import {
  backgroundClasses,
  sizeClasses,
  textLinkCommonClasses,
  typeClasses,
  weightClasses,
} from "./helpers/twClasses";
import { textAlignClasses } from "../common/tailwind/textAlign";
import getMargin from "./helpers/getMargin";

const Text = ({
  type = TYPE_OPTIONS.PRIMARY,
  size = SIZE_OPTIONS.NORMAL,
  weight = WEIGHT_OPTIONS.NORMAL,
  align = ALIGN_OPTIONS.LEFT,
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
  const { vars: cssVar, classes: marginClasses } = getMargin(margin);

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
      style={cssVar}
    >
      {children}
    </Component>
  );
};

export default Text;
