import type { Props } from "../types";
import type { QUERIES } from "../../utils/mediaQuery/consts";
import getWrapClass from "./getWrap";
import getPositionClass from "./getPosition";
import getTextAlignClass from "./getTextAlign";
import getElevationClass from "./getElevation";
import getBorderRadiusClass from "./getBorderRadius";
import getOverflowClass from "./getOverflow";
import getColorClass from "./getColor";
import getBackgroundClass from "./getBackground";
import getPaddingClass from "./getPadding";
import getMarginClass from "./getMargin";
import {
  getJustifyClasses,
  getAlignItemsClasses,
  getDisplayClasses,
  getDirectionClasses,
} from "../../common/tailwind";

const getTailwindClasses = (
  props: Props,
  viewport?: QUERIES,
): (string | null | undefined | (string | boolean)[])[] => {
  const {
    display,
    wrap,
    direction,
    position,
    align,
    justify,
    textAlign,
    elevation,
    borderRadius,
    overflow,
    color,
    background,
    padding,
    margin,
  } = props;

  return [
    display && getDisplayClasses(display, viewport),
    wrap && getWrapClass(wrap, viewport),
    direction && getDirectionClasses(direction, viewport),
    position && getPositionClass(position, viewport),
    align && getAlignItemsClasses(align, viewport),
    justify && getJustifyClasses(justify, viewport),
    textAlign && getTextAlignClass(textAlign, viewport),
    elevation && getElevationClass(elevation, viewport),
    borderRadius && getBorderRadiusClass(borderRadius, viewport),
    overflow && getOverflowClass(overflow, viewport),
    color && getColorClass(color, viewport),
    background && getBackgroundClass(background, viewport),
    padding && getPaddingClass(padding, viewport),
    margin && getMarginClass(margin, viewport),
  ];
};

export default getTailwindClasses;
