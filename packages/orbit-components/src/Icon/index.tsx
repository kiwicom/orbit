"use client";

import * as React from "react";
import cx from "clsx";

import { ICON_SIZES, ICON_COLORS } from "./consts";
import type { GetSize, FactoryProps } from "./types";

export const getSize: GetSize =
  size =>
  ({ theme }) => {
    const tokens = {
      [ICON_SIZES.SMALL]: theme.orbit.iconSmallSize,
      [ICON_SIZES.MEDIUM]: theme.orbit.iconMediumSize,
      [ICON_SIZES.LARGE]: theme.orbit.iconLargeSize,
    };
    return tokens[size] || tokens[ICON_SIZES.MEDIUM];
  };

const OrbitIcon = (props: FactoryProps) => {
  const {
    size = ICON_SIZES.MEDIUM,
    color,
    customColor,
    className,
    children,
    viewBox,
    dataTest,
    ariaHidden,
    reverseOnRtl,
    ariaLabel,
  } = props;
  return (
    <svg
      className={cx(
        className,
        "orbit-icon",
        "inline-block shrink-0 fill-current align-middle",
        reverseOnRtl && "rtl:-scale-x-100",
        size === ICON_SIZES.SMALL && "size-icon-small",
        size === ICON_SIZES.MEDIUM && "size-icon-medium",
        size === ICON_SIZES.LARGE && "size-icon-large",
        !customColor && [
          color === ICON_COLORS.PRIMARY && "text-icon-primary-foreground",
          color === ICON_COLORS.SECONDARY && "text-icon-secondary-foreground",
          color === ICON_COLORS.TERTIARY && "text-icon-tertiary-foreground",
          color === ICON_COLORS.INFO && "text-icon-info-foreground",
          color === ICON_COLORS.SUCCESS && "text-icon-success-foreground",
          color === ICON_COLORS.WARNING && "text-icon-warning-foreground",
          color === ICON_COLORS.CRITICAL && "text-icon-critical-foreground",
        ],
      )}
      viewBox={viewBox}
      preserveAspectRatio="xMidYMid meet"
      data-test={dataTest}
      aria-hidden={ariaHidden ? "true" : undefined}
      aria-label={ariaLabel}
      style={customColor ? { color: customColor } : {}}
    >
      {children}
    </svg>
  );
};

OrbitIcon.defaultProps = {
  size: ICON_SIZES.MEDIUM,
};

export default OrbitIcon;
