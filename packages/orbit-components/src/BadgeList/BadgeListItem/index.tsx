"use client";

import * as React from "react";
import styled, { css } from "styled-components";

import Text from "../../Text";
import { TYPE_OPTIONS, SIZE_OPTIONS } from "../consts";
import defaultTheme from "../../defaultTheme";
import { ICON_COLORS } from "../../Icon/consts";
import { right } from "../../utils/rtl";
import type { Props, Type } from "./types";
import type { Props as IconProps } from "../../Icon/types";

const getBackground = ({ theme, $type }: { theme: typeof defaultTheme; $type?: Type }) => {
  const tokens = {
    [TYPE_OPTIONS.NEUTRAL]: theme.orbit.paletteCloudLight,
    [TYPE_OPTIONS.INFO]: theme.orbit.paletteBlueLight,
    [TYPE_OPTIONS.SUCCESS]: theme.orbit.paletteGreenLight,
    [TYPE_OPTIONS.WARNING]: theme.orbit.paletteOrangeLight,
    [TYPE_OPTIONS.CRITICAL]: theme.orbit.paletteRedLight,
  };

  if (!$type) return null;

  return tokens[$type];
};

export const getIconColor = (type: Type) => {
  if (type === TYPE_OPTIONS.NEUTRAL) return ICON_COLORS.SECONDARY;
  return type;
};

export const StyledBadgeListItem = styled.li`
  ${({ theme }) => css`
    display: flex;
    flex-direction: row;
    width: 100%;
    & + & {
      margin-top: ${theme.orbit.spaceXXSmall};
    }
  `};
`;

StyledBadgeListItem.defaultProps = {
  theme: defaultTheme,
};

export const StyledVerticalBadge = styled.div<{ $type?: Props["type"] }>`
  ${({ theme, $type }) => css`
    background: ${getBackground({ theme, $type })};
    display: flex;
    align-items: center;
    justify-content: center;
    margin-${right}: ${theme.orbit.spaceXSmall};
    flex-shrink: 0;
    height: ${theme.orbit.heightIconLarge};
    width: ${theme.orbit.widthIconLarge};
    border-radius: ${theme.orbit.borderRadiusCircle};
    svg {
      height: ${theme.orbit.heightIconSmall};
      width: ${theme.orbit.widthIconSmall};
    }
  `};
`;

StyledVerticalBadge.defaultProps = {
  theme: defaultTheme,
};

export const StyledBadgeContent = styled.div`
  ${({ theme }) => css`
    display: inline-flex;
    align-items: center;

    .orbit-tooltip-wrapper .orbit-text {
      font-weight: ${theme.orbit.fontWeightMedium};
    }
  `};
`;

StyledBadgeContent.defaultProps = {
  theme: defaultTheme,
};

const BadgeListItem = ({
  icon,
  strikeThrough,
  type = TYPE_OPTIONS.NEUTRAL,
  size = SIZE_OPTIONS.SMALL,
  dataTest,
  children,
}: Props) => {
  return (
    <StyledBadgeListItem data-test={dataTest}>
      <StyledVerticalBadge $type={type} aria-hidden>
        {React.isValidElement(icon) &&
          React.cloneElement(icon as React.ReactElement<IconProps>, {
            color: getIconColor(type),
          })}
      </StyledVerticalBadge>
      <StyledBadgeContent>
        <Text type="secondary" size={size} as="span" strikeThrough={strikeThrough}>
          {children}
        </Text>
      </StyledBadgeContent>
    </StyledBadgeListItem>
  );
};

export default BadgeListItem;
