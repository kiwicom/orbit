"use client";

import * as React from "react";
import cx from "clsx";

import Text from "../../Text";
import { TYPE_OPTIONS, SIZE_OPTIONS } from "../consts";
import { ICON_COLORS } from "../../Icon/consts";
import type { Props, Type } from "./types";
import { iconColorClasses } from "../../Icon";

const BACKGROUND = {
  [TYPE_OPTIONS.NEUTRAL]: "bg-badge-neutral-background",
  [TYPE_OPTIONS.INFO]: "bg-badge-info-subtle-background",
  [TYPE_OPTIONS.SUCCESS]: "bg-badge-success-subtle-background",
  [TYPE_OPTIONS.WARNING]: "bg-badge-warning-subtle-background",
  [TYPE_OPTIONS.CRITICAL]: "bg-badge-critical-subtle-background",
};

const ICON_COLOR: Record<TYPE_OPTIONS, string> = {
  [TYPE_OPTIONS.NEUTRAL]: iconColorClasses[ICON_COLORS.SECONDARY],
  [TYPE_OPTIONS.INFO]: iconColorClasses[ICON_COLORS.INFO],
  [TYPE_OPTIONS.SUCCESS]: iconColorClasses[ICON_COLORS.SUCCESS],
  [TYPE_OPTIONS.WARNING]: iconColorClasses[ICON_COLORS.WARNING],
  [TYPE_OPTIONS.CRITICAL]: iconColorClasses[ICON_COLORS.CRITICAL],
} as const;

export const getIconColor = (type: Type) => {
  if (type === TYPE_OPTIONS.NEUTRAL) return ICON_COLORS.SECONDARY;
  return type;
};

export const ItemWrapper = ({ children, dataTest }) => (
  <li className="[&_+_&]:mt-100 flex w-full flex-row" data-test={dataTest}>
    {children}
  </li>
);

export const VerticalBadge = ({ icon, type }: { icon: React.ReactNode; type: Props["type"] }) => {
  return (
    <div
      className={cx(
        "me-200 size-icon-large flex shrink-0 items-center justify-center rounded-full",
        "[&_svg]:size-icon-small",
        type && [BACKGROUND[type], ICON_COLOR[type]],
      )}
      aria-hidden
    >
      {icon}
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
      <VerticalBadge type={type} icon={icon} />
      <BadgeContent>
        <Text type="secondary" size={size} as="span" strikeThrough={strikeThrough}>
          {children}
        </Text>
      </BadgeContent>
    </ItemWrapper>
  );
};

export default BadgeListItem;
