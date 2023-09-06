"use client";

import React from "react";
import cx from "clsx";

import type { Props, CommonProps, Direction, Spacing } from "./types";
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
import { DIRECTION } from "../common/tailwind/direction";
import { SPACING } from "../common/tailwind/spacing";
import { ALIGN } from "../common/tailwind/alignItems";
import { JUSTIFY } from "../common/tailwind/justify";

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
  } = props;

  const viewportProps = { mediumMobile, largeMobile, tablet, desktop, largeDesktop };

  const defaultMediaProps = React.useMemo(() => {
    const isFlex = shouldUseFlex(props) || props.inline;

    const {
      spacing = SPACING.medium,
      spaceAfter,
      direction = isFlex ? DIRECTION.ROW : DIRECTION.COLUMN,
      grow = true,
      justify = JUSTIFY.START,
      shrink = false,
      wrap = false,
      align = ALIGN.START,
      inline = false,
    } = props;

    return {
      flex: isFlex,
      direction,
      spacing,
      grow,
      inline,
      justify,
      align,
      shrink,
      wrap,
      spaceAfter,
    };
  }, [props]);

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

  const getProperty = React.useCallback(
    (property, viewports, index) => {
      const viewport = viewports[index];
      const found = props[viewport]?.[property];

      if (typeof found !== "undefined") return found;
      if (index > 0) return getProperty(property, viewports, index - 1);

      return defaultMediaProps[property];
    },
    [props, defaultMediaProps],
  );

  const getTailwindTokensForMedia = (
    opts?: CommonProps & {
      direction: Direction;
      spacing: Spacing;
    },
    viewport?: QUERIES,
  ): string => {
    if (!opts) return "";

    const { spaceAfter, align, wrap, grow, shrink, justify, direction, spacing, inline, flex } =
      opts;

    return cx(
      typeof spaceAfter !== "undefined" && getSpaceAfterClasses(spaceAfter, viewport),
      typeof align !== "undefined" && getAlignItemsClasses(align, viewport),
      typeof align !== "undefined" && getAlignContentClasses(align, viewport),
      typeof wrap !== "undefined" && getWrapClasses(wrap, viewport),
      typeof grow !== "undefined" && getGrowClasses(grow, viewport),
      typeof shrink !== "undefined" && getShrinkClasses(shrink, viewport),
      typeof justify !== "undefined" && getJustifyClasses(justify, viewport),
      getDirectionClasses(direction, viewport),
      getSpacingClasses(spacing, viewport, direction),
      inline && getDisplayInlineClass(inline, viewport),
      inline === false && "w-full",
      flex && "flex",
    );
  };

  return (
    // @ts-expect-error orbit string as
    <ComponentTag
      data-test={dataTest}
      style={vars}
      className={cx(
        getTailwindTokensForMedia(defaultMediaProps),
        ...varClasses,
        Object.values(QUERIES).map((viewport, index, viewports) => {
          if (!viewportProps[viewport]) return null;
          return getTailwindTokensForMedia(
            {
              ...props[viewport],
              direction: getProperty("direction", viewports, index),
              spacing: getProperty("spacing", viewports, index),
            },
            viewport,
          );
        }),
      )}
    >
      {children}
    </ComponentTag>
  );
};

export default Stack;
