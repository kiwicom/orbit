// @flow
import * as React from "react";
import styled, { css } from "styled-components";

import { left, rtlSpacing } from "../../utils/rtl";
import Text from "../../Text";
import Stack from "../../Stack";
import defaultTheme from "../../defaultTheme";
import type { ThemeProps } from "../../defaultTheme";
import { STATUS } from "./consts";
import getSpacingToken from "../../common/getSpacingToken";
import type { Status } from "..";
import AlertOctagon from "../../icons/AlertOctagon";
import Warning from "../../icons/AlertCircle";
import Info from "../../icons/InformationCircle";
import Check from "../../icons/CheckCircle";

import type { Props } from ".";

const resolveColor = (status: Status, isHeader?: boolean) => ({ theme }: ThemeProps) => {
  const border = {
    [STATUS.WARNING]: theme.orbit.paletteOrangeNormal,
    [STATUS.CRITICAL]: theme.orbit.paletteRedNormal,
    [STATUS.INFO]: theme.orbit.paletteBlueNormal,
    [STATUS.SUCCESS]: theme.orbit.paletteGreenNormal,
    [STATUS.NEUTRAL]: theme.orbit.paletteInkNormal,
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

const StyledWrapper = styled.div`
  ${({ theme, $type }) => css`
    display: flex;
    box-sizing: border-box;
    flex-direction: column;
    width: 100%;
    border-radius: ${theme.orbit.borderRadiusLarge};
    border-${left}: ${theme.orbit.borderRadiusNormal} solid ${$type && resolveColor($type)};
    box-shadow: ${theme.orbit.boxShadowFixed};
    margin-bottom: ${getSpacingToken};
    &:hover,
    &:focus {
      outline: none;
      box-shadow: ${theme.orbit.boxShadowActionActive};
    }
  `}
`;

// $FlowFixMe: https://github.com/flow-typed/flow-typed/issues/3653#issuecomment-568539198
StyledWrapper.defaultProps = {
  theme: defaultTheme,
};

const StyledStatusHeader = styled.div`
  ${({ theme, $type }) => css`
    display: flex;
    align-items: center;
    padding: ${rtlSpacing(`0 ${theme.orbit.spaceXSmall}`)};
    height: ${theme.orbit.spaceXLarge};
    border-radius: ${theme.orbit.borderRadiusNormal} ${theme.orbit.borderRadiusLarge} 0 0;
    background: ${$type && resolveColor($type, true)};
  `}
`;

// $FlowFixMe: https://github.com/flow-typed/flow-typed/issues/3653#issuecomment-568539198
StyledStatusHeader.defaultProps = {
  theme: defaultTheme,
};

// calculatedOffset + paddings
const StyledStatusText = styled.div`
  ${({ theme, $offset }) => css`
    z-index: 2;
    margin-${left}: ${parseInt(theme.orbit.spaceSmall, 10) + $offset}px;
  `};
`;

// $FlowFixMe: https://github.com/flow-typed/flow-typed/issues/3653#issuecomment-568539198
StyledStatusText.defaultProps = {
  theme: defaultTheme,
};

const StatusIcon = ({ type }: {| type: Status |}) => {
  switch (type) {
    case "info":
      return <Info size="small" color={type} />;
    case "critical":
      return <AlertOctagon size="small" color={type} />;
    case "success":
      return <Check size="small" color={type} />;
    case "neutral":
      return <Info size="small" color="primary" />;
    default:
      return <Warning size="small" color={type} />;
  }
};

const ItineraryStatus = ({
  type,
  label,
  spaceAfter = "medium",
  children,
  offset = 0,
}: Props): React.Node => {
  return (
    <StyledWrapper $type={type} spaceAfter={spaceAfter} tabIndex={0}>
      <StyledStatusHeader $type={type}>
        <StyledStatusText $offset={offset}>
          <Stack inline spacing="XSmall" align="center">
            <StatusIcon type={type} />
            {label && (
              <Text type={type === "neutral" ? "primary" : type} weight="medium">
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
