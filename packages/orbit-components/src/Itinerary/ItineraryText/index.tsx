import React from "react";
import cx from "clsx";

import type { Props as TextProps } from "../../Text/types";
import {
  TYPE_OPTIONS,
  WEIGHT_OPTIONS,
  ELEMENT_OPTIONS,
  ALIGN_OPTIONS,
  SIZE_OPTIONS,
} from "../../Text/consts";
import {
  sizeClasses,
  typeClasses,
  weightClasses,
  backgroundClasses,
} from "../../Text/helpers/twClasses";
import { spaceAfterClasses, textAlignClasses } from "../../common/tailwind";

const alternativeTextTypeColors: Record<TYPE_OPTIONS, string> = {
  [TYPE_OPTIONS.PRIMARY]: typeClasses.primary,
  [TYPE_OPTIONS.SECONDARY]: typeClasses.secondary,
  [TYPE_OPTIONS.INFO]: "text-blue-dark",
  [TYPE_OPTIONS.SUCCESS]: "text-green-dark",
  [TYPE_OPTIONS.WARNING]: "text-orange-dark",
  [TYPE_OPTIONS.CRITICAL]: "text-red-dark",
  [TYPE_OPTIONS.WHITE]: typeClasses.primary,
} as const;

const ItineraryText = ({
  type = TYPE_OPTIONS.PRIMARY,
  size = SIZE_OPTIONS.NORMAL,
  weight = WEIGHT_OPTIONS.NORMAL,
  align = ALIGN_OPTIONS.START,
  as: Component = ELEMENT_OPTIONS.P,
  uppercase,
  italic,
  strikeThrough,
  spaceAfter,
  children,
  withBackground,
}: TextProps) => {
  return (
    <Component
      className={cx(
        "orbit-text font-base m-0 text-wrap",
        alternativeTextTypeColors[type],
        withBackground && backgroundClasses[type],
        sizeClasses[size],
        weightClasses[weight],
        textAlignClasses[align],
        uppercase && "uppercase",
        strikeThrough && "line-through",
        italic && "italic",
        spaceAfter && spaceAfterClasses[spaceAfter],
      )}
    >
      {children}
    </Component>
  );
};

export default ItineraryText;
