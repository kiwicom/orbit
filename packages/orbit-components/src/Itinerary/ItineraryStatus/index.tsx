import * as React from "react";
import styled, { css } from "styled-components";

import type * as Common from "../../common/types";
import { left, rtlSpacing } from "../../utils/rtl";
import Text from "../ItineraryTemporaryText";
import Stack from "../../Stack";
import type { ThemeProps } from "../../defaultTheme";
import defaultTheme from "../../defaultTheme";
import { STATUS } from "./consts";
import getSpacingToken from "../../common/getSpacingToken";
import type { Status } from "../types";
import AlertOctagon from "../../icons/AlertOctagon";
import Warning from "../../icons/AlertCircle";
import Info from "../../icons/InformationCircle";
import Check from "../../icons/CheckCircle";
import useTheme from "../../hooks/useTheme";
import type { Props } from "./types";

const resolveColor = (status: Status, isHeader?: boolean) => ({ theme }: ThemeProps) => {
  const border = {
    [STATUS.WARNING]: theme.orbit.paletteOrangeNormal,
    [STATUS.CRITICAL]: theme.orbit.paletteRedNormal,
    [STATUS.INFO]: theme.orbit.paletteBlueNormal,
    [STATUS.SUCCESS]: theme.orbit.paletteGreenNormal,
    [STATUS.NEUTRAL]: theme.orbit.paletteInkDark,
  };

  const header = {
    [STATUS.WARNING]: theme.orbit.paletteOrangeLight,
    [STATUS.INFO]: theme.orbit.paletteBlueLight,
    [STATUS.CRITICAL]: theme.orbit.paletteRedLight,
    [STATUS.SUCCESS]: theme.orbit.paletteGreenLight,
    [STATUS.NEUTRAL]: theme.orbit.paletteCloudNormal,
  };

  if (isHeader) return header[status];

  return border[status];
};

const StyledWrapper = styled.div<{ $type: Status; spaceAfter: Common.SpaceAfterSizes }>`
  ${({ theme, $type }) => css`
    display: flex;
    box-sizing: border-box;
    flex-direction: column;
    width: 100%;
    border-radius: ${theme.orbit.borderRadiusLarge};
    border-${left}: ${theme.orbit.borderRadiusNormal} solid ${$type && resolveColor($type)};
    box-shadow: ${theme.orbit.boxShadowFixed};
    margin-bottom: ${getSpacingToken};
    &:hover {
      outline: none;
      box-shadow: ${theme.orbit.boxShadowActionActive};
    }
  `}
`;

StyledWrapper.defaultProps = {
  theme: defaultTheme,
};

const StyledStatusHeader = styled.div<{ $type: Status }>`
  ${({ theme, $type }) => css`
    display: flex;
    align-items: center;
    padding: ${rtlSpacing(`0 ${theme.orbit.spaceXSmall}`)};
    min-height: ${theme.orbit.spaceXLarge};
    border-radius: ${theme.orbit.borderRadiusNormal} ${theme.orbit.borderRadiusLarge} 0 0;
    background: ${$type && resolveColor($type, true)};
  `}
`;

StyledStatusHeader.defaultProps = {
  theme: defaultTheme,
};

// calculatedOffset + paddings
const StyledStatusText = styled.div<{ $offset: number }>`
  ${({ theme, $offset }) => css`
    z-index: 2;
    margin-${left}: ${parseInt(theme.orbit.spaceSmall, 10) + $offset}px;
  `};
`;

StyledStatusText.defaultProps = {
  theme: defaultTheme,
};

// TODO: refactor this after designers will resolve status colors
// https://skypicker.slack.com/archives/GSGN9BN6Q/p1674568716519889
const StatusIcon = ({ type }: { type: Status }) => {
  const theme = useTheme();

  switch (type) {
    case "info":
      return <Info size="small" customColor={theme.orbit.paletteBlueDark} />;
    case "critical":
      return <AlertOctagon size="small" customColor={theme.orbit.paletteRedDark} />;
    case "success":
      return <Check size="small" customColor={theme.orbit.paletteGreenDark} />;
    case "neutral":
      return <Info size="small" customColor="primary" />;
    default:
      return <Warning size="small" customColor={theme.orbit.paletteOrangeDark} />;
  }
};

const ItineraryStatus = ({ type, label, spaceAfter = "medium", children, offset = 0 }: Props) => {
  return (
    <StyledWrapper $type={type} spaceAfter={spaceAfter}>
      <StyledStatusHeader $type={type}>
        <StyledStatusText $offset={offset}>
          <Stack flex spacing="XSmall" align="center">
            <StatusIcon type={type} />
            {label && (
              <Text as="div" type={type === "neutral" ? "primary" : type} weight="medium">
                {label}
              </Text>
            )}
          </Stack>
        </StyledStatusText>
      </StyledStatusHeader>
      {children}
    </StyledWrapper>
  );
};

export default ItineraryStatus;
