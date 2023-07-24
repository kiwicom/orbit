import type { Props } from "../types";
import type { QUERIES } from "../../utils/mediaQuery/consts";
import getDisplayClass from "./getDisplay";
import getWrapClass from "./getWrap";
import getDirectionClass from "./getDirection";
import getPositionClass from "./getPosition";
import getAlignItemsClass from "./getAlignItems";
import getJustifyClass from "./getJustify";
import getTextAlignClass from "./getTextAlign";
import getElevationClass from "./getElevation";
import getBorderRadiusClass from "./getBorderRadius";
import getOverflowClass from "./getOverflow";
import getColorClass from "./getColor";
import getBackgroundClass from "./getBackground";
import getPaddingClass from "./getPadding";
import getMarginClass from "./getMargin";

const getTailwindClasses = (props: Props, viewport?: QUERIES) => {
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
    display && getDisplayClass(display, viewport),
    wrap && getWrapClass(wrap, viewport),
    direction && getDirectionClass(direction, viewport),
    position && getPositionClass(position, viewport),
    align && getAlignItemsClass(align, viewport),
    justify && getJustifyClass(justify, viewport),
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
