"use client";

import * as React from "react";
import cx from "clsx";

import Text from "../../Text";
import { TYPE_OPTIONS, SIZE_OPTIONS } from "../consts";
import { ICON_COLORS } from "../../Icon/consts";
import type { Props, Type } from "./types";
import type { Props as IconProps } from "../../Icon/types";

const BACKGROUND = {
  [TYPE_OPTIONS.NEUTRAL]: "bg-badge-neutral-background",
  [TYPE_OPTIONS.INFO]: "bg-badge-info-subtle-background",
  [TYPE_OPTIONS.SUCCESS]: "bg-badge-success-subtle-background",
  [TYPE_OPTIONS.WARNING]: "bg-badge-warning-subtle-background",
  [TYPE_OPTIONS.CRITICAL]: "bg-badge-critical-subtle-background",
};

export const getIconColor = (type: Type) => {
  if (type === TYPE_OPTIONS.NEUTRAL) return ICON_COLORS.SECONDARY;
  return type;
};

export const ItemWrapper = ({ children, dataTest }) => (
  <li className="[&_+_&]:mt-xxs flex w-full flex-row" data-test={dataTest}>
    {children}
  </li>
);

export const VerticalBadge = ({
  children,
  type,
}: {
  children: React.ReactNode;
  type: Props["type"];
}) => {
  return (
    <div
      className={cx(
        "me-xs h-icon-large w-icon-large rounded-circle flex flex-shrink-0 items-center justify-center",
        "[&_svg]:h-icon-small [&_svg]:w-icon-small",
        type && BACKGROUND[type],
      )}
      aria-hidden
    >
      {children}
    </div>
  );
};

export const BadgeContent = ({
  children,
  style,
}: {
  children: React.ReactNode;
  style?: React.CSSProperties;
}) => (
  <div
    className="inline-flex items-center [&_.orbit-tooltip-wrapper_.orbit-text]:font-medium"
    style={style}
  >
    {children}
  </div>
);

const BadgeListItem = ({
  icon,
  strikeThrough,
  type = TYPE_OPTIONS.NEUTRAL,
  size = SIZE_OPTIONS.SMALL,
  dataTest,
  children,
}: Props) => {
  return (
    <ItemWrapper dataTest={dataTest}>
      <VerticalBadge type={type}>
        {React.isValidElement(icon) &&
          React.cloneElement(icon as React.ReactElement<IconProps>, {
            color: getIconColor(type),
          })}
      </VerticalBadge>
      <BadgeContent>
        <Text type="secondary" size={size} as="span" strikeThrough={strikeThrough}>
          {children}
        </Text>
      </BadgeContent>
    </ItemWrapper>
  );
};

export default BadgeListItem;
