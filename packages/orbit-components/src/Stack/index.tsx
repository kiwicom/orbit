"use client";

import React from "react";
import cx from "clsx";

import type { Props, CommonProps } from "./types";
import type * as Common from "../common/types";
import {
  getDisplayInlineClass,
  getDirectionClasses,
  getAlignItemsClasses,
  getWrapClasses,
  getGrowClasses,
  getShrinkClasses,
  getAlignContentClasses,
  getJustifyClasses,
  getSpacingClasses,
  getSpaceAfterClasses,
} from "../common/tailwind";
import { QUERIES } from "../utils/mediaQuery/consts";
import { ALIGN } from "../common/tailwind/alignItems";
import { JUSTIFY } from "../common/tailwind/justify";
import { SPACING } from "../common/tailwind/spacing";
import { DIRECTION } from "../common/tailwind/direction";

const shouldUseFlex = (props: CommonProps & Common.SpaceAfter) =>
  props.flex ||
  Object.keys(props)
    .map(prop => ["spacing", "spaceAfter", "dataTest", "children"].includes(prop))
    .includes(false);

const Stack = (props: Props) => {
  const {
    children,
    as: ComponentTag = "div",
    dataTest,
    basis,
    mediumMobile,
    largeMobile,
    tablet,
    desktop,
    largeDesktop,
    ...restProps
  } = props;

  const viewportProps = { mediumMobile, largeMobile, tablet, desktop, largeDesktop };

  const defaultMediaProps = () => {
    const {
      spacing = SPACING.medium,
      direction,
      grow = true,
      inline = false,
      justify = JUSTIFY.START,
      shrink = false,
      wrap = false,
      align = ALIGN.START,
      spaceAfter,
    } = restProps;

    const isFlex = shouldUseFlex({ spacing, spaceAfter, ...restProps }) || inline;
    const flexDirection = direction || (isFlex ? DIRECTION.ROW : DIRECTION.COLUMN);

    return {
      flex: isFlex,
      direction: flexDirection,
      spacing,
      grow,
      inline,
      justify,
      align,
      shrink,
      wrap,
      spaceAfter,
    };
  };

  const vars = {
    "--basis": basis,
    "--mm-basis": mediumMobile?.basis,
    "--lm-basis": largeMobile?.basis,
    "--tb-basis": tablet?.basis,
    "--de-basis": desktop?.basis,
    "--ld-basis": largeDesktop?.basis,
  };

  const varClasses = [
    vars["--basis"] != null && "basis-[var(--basis)]",
    vars["--mm-basis"] != null && "mm:basis-[var(--mm-basis)]",
    vars["--lm-basis"] != null && "lm:basis-[var(--lm-basis)]",
    vars["--tb-basis"] != null && "tb:basis-[var(--tb-basis)]",
    vars["--de:basis"] != null && "de:basis-[var(--de-basis)]",
    vars["--ld:basis"] != null && "ld:basis-[var(--ld-basis)]",
  ];

  const getTailwindTokensForMedia = (
    properties?: CommonProps & Common.SpaceAfter,
    viewport?: QUERIES,
  ): string => {
    if (!properties) return "";

    const { flex, direction, spaceAfter, inline, wrap, grow, shrink, align, justify, spacing } =
      properties;

    return cx(
      typeof spaceAfter !== "undefined" && getSpaceAfterClasses(spaceAfter, viewport),
      typeof spacing !== "undefined" && getSpacingClasses(spacing, viewport, direction),
      typeof direction !== "undefined" && getDirectionClasses(direction, viewport),
      typeof align !== "undefined" && getAlignItemsClasses(align, viewport),
      typeof align !== "undefined" && getAlignContentClasses(align, viewport),
      typeof wrap !== "undefined" && getWrapClasses(wrap, viewport),
      typeof grow !== "undefined" && getGrowClasses(grow, viewport),
      typeof shrink !== "undefined" && getShrinkClasses(shrink, viewport),
      typeof justify !== "undefined" && getJustifyClasses(justify, viewport),
      inline && [getDisplayInlineClass(inline, viewport), "w-full"],
      flex && "flex",
    );
  };

  return (
    // @ts-expect-error orbit string as
    <ComponentTag
      data-test={dataTest}
      style={vars}
      className={cx(
        getTailwindTokensForMedia(defaultMediaProps()),
        ...varClasses,
        Object.values(QUERIES).map(viewport => {
          if (!viewportProps[viewport]) return null;
          return getTailwindTokensForMedia(viewportProps[viewport], viewport);
        }),
      )}
    >
      {children}
    </ComponentTag>
  );
};

export default Stack;
