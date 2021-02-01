// @flow
import styled, { css } from "styled-components";
import * as React from "react";

import Stack from "../Stack";
import Text from "../Text";
import randomID from "../utils/randomID";
import defaultTheme from "../defaultTheme";
import SeatNormal, {
  StyledPath as StyledPathNormal,
  StyledStrokeNormal,
} from "./components/SeatNormal";
import SeatSmall, {
  StyledPath as StyledPathSmall,
  StyledStrokeSmall,
} from "./components/SeatSmall";
import {
  resolveHoverColor,
  resolveFillColor,
  resolveFocusColor,
  resolveCloseIconColor,
} from "./components/helpers";
import SeatCircle, { StyledCirclePath } from "./components/SeatCircle";
import { SIZE_OPTIONS, TYPES } from "./consts";

import type { Props } from "./index";

const getSize = ({ size }) => {
  const height = {
    [SIZE_OPTIONS.SMALL]: "36px",
    [SIZE_OPTIONS.MEDIUM]: "46px",
  };

  const width = {
    [SIZE_OPTIONS.SMALL]: "32px",
    [SIZE_OPTIONS.MEDIUM]: "46px",
  };

  return `width: ${width[size]}; height: ${height[size]};`;
};

const StyledSeatWrapper = styled.div`
  ${({ type, selected, theme }) => css`
    position: relative;
    cursor: pointer;
    outline: none;
    &:hover {
      ${StyledPathNormal}, ${StyledPathSmall}, ${StyledStrokeSmall} {
        ${type !== TYPES.UNAVAILABLE &&
        !selected &&
        css`
          fill: ${resolveHoverColor};
        `};
      }
      ${StyledCirclePath} {
        fill: ${resolveCloseIconColor({ theme, type, hover: true })};
      }
    }
    &:focus {
      ${StyledPathNormal}, ${StyledPathSmall} {
        ${resolveFillColor({ theme, type, selected, focus: true })};
      }
      ${StyledStrokeNormal}, ${StyledStrokeSmall} {
        stroke: ${resolveFocusColor};
      }
    }
  `}
`;

StyledSeatWrapper.defaultProps = {
  theme: defaultTheme,
};

const StyledSeat = styled.svg`
  ${getSize};
  font-family: ${({ theme }) => theme.orbit.fontFamily};
`;

StyledSeat.defaultProps = {
  theme: defaultTheme,
};

const Seat = ({
  type = TYPES.DEFAULT,
  selected,
  onClick,
  size = SIZE_OPTIONS.MEDIUM,
  dataTest,
  price,
  label,
  title = "Seat",
  description = "Presents options for seating",
}: Props) => {
  const titleId = React.useMemo(() => randomID("title"), []);
  const descrId = React.useMemo(() => randomID("descr"), []);

  return (
    <Stack inline grow={false} spacing="XXXSmall" direction="column" align="center">
      <StyledSeatWrapper
        onClick={onClick}
        type={type}
        selected={selected}
        tabIndex={type !== TYPES.UNAVAILABLE ? "0" : "-1"}
      >
        <StyledSeat
          data-test={dataTest}
          viewBox={size === SIZE_OPTIONS.SMALL ? "0 0 32 36" : "0 0 46 46"}
          aria-labelledby={`${titleId} ${descrId}`}
          size={size}
          fill="none"
          role="img"
        >
          <title id={titleId}>{title}</title>
          <desc id={descrId}>{description}</desc>

          {size === SIZE_OPTIONS.SMALL ? (
            <SeatSmall type={type} selected={selected} price={price} label={label} />
          ) : (
            <SeatNormal type={type} selected={selected} price={price} label={label} />
          )}
        </StyledSeat>
        {selected && type !== TYPES.UNAVAILABLE && <SeatCircle size={size} type={type} />}
      </StyledSeatWrapper>
      {price && !(selected && type === TYPES.UNAVAILABLE) && (
        <Text size="small" type="secondary">
          {price}
        </Text>
      )}
    </Stack>
  );
};

export default Seat;
