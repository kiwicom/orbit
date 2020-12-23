// @flow
import styled from "styled-components";
import * as React from "react";

import randomID from "../utils/randomID";
import defaultTheme from "../defaultTheme";
import SeatItem from "./SeatItem";
import { SIZE_OPTIONS } from "./consts";

import type { Props } from "./index";

const getSize = ({ size }) => {
  const height = {
    [SIZE_OPTIONS.SMALL]: "57px",
    [SIZE_OPTIONS.MEDIUM]: "65px",
  };

  const width = {
    [SIZE_OPTIONS.SMALL]: "40px",
    [SIZE_OPTIONS.MEDIUM]: "53px",
  };

  return `width: ${width[size]}; height: ${height[size]};`;
};

const StyledSeat = styled.svg`
  flex-shrink: 0;
  position: relative;
  font-family: ${({ theme }) => theme.orbit.fontFamily};
  ${getSize};
`;

StyledSeat.defaultProps = {
  theme: defaultTheme,
};

const Seat = ({
  type,
  selected,
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
    <StyledSeat
      viewBox={size === SIZE_OPTIONS.SMALL ? "0 0 40 57" : "0 0 53 65"}
      aria-labelledby={`${titleId} ${descrId}`}
      size={size}
      role="img"
      data-test={dataTest}
    >
      <title id={titleId}>{title}</title>
      <desc id={descrId}>{description}</desc>
      <SeatItem type={type} selected={selected} size={size} price={price} label={label} />
    </StyledSeat>
  );
};

export default Seat;
