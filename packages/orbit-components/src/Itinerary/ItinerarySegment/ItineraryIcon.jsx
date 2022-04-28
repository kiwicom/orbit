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
  ${({ theme, index, last, count, isNextHidden }) => css`
    display: flex;
    justify-content: center;
    z-index: 1;

    ${index > 0 &&
    count > 0 &&
    css`
      &:before {
        top: -9px;
        border: 1px solid ${theme.orbit.paletteCloudNormalActive};
        ${lineMixin};
      }
    `};

    ${!last &&
    count > 0 &&
    css`
      &:after {
        bottom: -7px;
        opacity: ${isNextHidden ? `0.5` : `1`};
        border: 1px solid ${theme.orbit.paletteCloudNormalActive};
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
  if (type) return <AlertCircle size="small" color={type} />;
  if (isDetails) return <AirplaneDown size="small" />;

  return <Circle size="small" color="secondary" />;
};

const ItineraryIcon = ({ isDetails, type, children }: Props): React.Node => {
  const { index, last, isNextHidden, count } = usePart();

  return (
    <IconStyled
      index={index}
      last={last}
      isDetails={isDetails}
      isNextHidden={isNextHidden}
      count={count}
    >
      <Icon type={type} isDetails={isDetails} icon={children} />
    </IconStyled>
  );
};

export default ItineraryIcon;
