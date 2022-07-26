// @flow
import * as React from "react";
import styled, { css } from "styled-components";

import { usePart } from "./context";
import AirplaneDown from "../../icons/AirplaneDown";
import AlertCircle from "../../icons/AlertCircle";
import Circle from "../../icons/Circle";
import defaultTheme from "../../defaultTheme";
import type { Status } from "..";

type Props = {|
  isDetails?: boolean,
  type?: Status,
  children?: React.Node,
|};

const lineMixin = css`
  content: "";
  position: absolute;
  height: calc(50% + 9px);
  z-index: -1;
`;

// TODO: Improve
const IconStyled = styled.div`
  ${({ theme, index, last, count, isPrevHidden, isHidden }) => css`
    display: flex;
    justify-content: center;
    z-index: 1;
    svg {
      background: ${last || index === 0 ? "transparent" : theme.orbit.paletteWhite};
      overflow: hidden;
    }
    ${index > 0 &&
    !last &&
    css`
      padding: ${theme.orbit.spaceXXSmall} 0;
      background: radial-gradient(
        farthest-side,
        ${theme.orbit.paletteWhite},
        ${theme.orbit.paletteWhite},
        ${theme.orbit.paletteWhite},
        transparent
      );
    `}

    ${index > 0 &&
    count > 0 &&
    css`
      &:before {
        top: ${last && isPrevHidden ? "-14px" : "-9px"};
        border: 1px ${isPrevHidden ? "dashed" : "solid"} ${theme.orbit.paletteCloudNormalActive};
        ${lineMixin};
      }
    `};

    ${!last &&
    count > 0 &&
    css`
      &:after {
        bottom: ${isHidden ? "4px" : "-9px"};
        border: 1px ${isHidden ? "dashed" : "solid"} ${theme.orbit.paletteCloudNormalActive};
        ${lineMixin};
      }
    `};
  `}
`;

// $FlowFixMe: https://github.com/flow-typed/flow-typed/issues/3653#issuecomment-568539198
IconStyled.defaultProps = {
  theme: defaultTheme,
};

const Icon = ({ type, isDetails, icon }) => {
  if (icon) return icon;
  if (type) return <AlertCircle size="small" color={type === "neutral" ? "primary" : type} />;
  if (isDetails) return <AirplaneDown size="small" />;

  return <Circle size="small" color="secondary" />;
};

const ItineraryIcon = ({ isDetails, type, children }: Props): React.Node => {
  const { index, last, isPrevHidden, isHidden, count } = usePart();

  return (
    <IconStyled
      index={index}
      last={last}
      isDetails={isDetails}
      isPrevHidden={isPrevHidden}
      isHidden={isHidden}
      count={count}
    >
      <Icon type={type} isDetails={isDetails} icon={children} />
    </IconStyled>
  );
};

export default ItineraryIcon;
