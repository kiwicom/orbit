// @flow
import styled from "styled-components";
import * as React from "react";

import Stack from "../Stack";
import Text from "../Text";
import randomID from "../utils/randomID";
import defaultTheme from "../defaultTheme";
import SeatItem from "./SeatItem";
import { SIZE_OPTIONS, TYPES } from "./consts";

import type { Props } from "./index";

const getSize = ({ size, selected }) => {
  const height = {
    [SIZE_OPTIONS.EXTRASMALL]: "11px",
    [SIZE_OPTIONS.SMALL]: selected ? "43px" : "36px",
    [SIZE_OPTIONS.MEDIUM]: selected ? "54px" : "46px",
  };

  const width = {
    [SIZE_OPTIONS.EXTRASMALL]: "10px",
    [SIZE_OPTIONS.SMALL]: selected ? "40px" : "34px",
    [SIZE_OPTIONS.MEDIUM]: selected ? "54px" : "47px",
  };

  return `width: ${width[size]}; height: ${height[size]};`;
};

const resolveViewBoxSize = (size, selected) => {
  if (size === SIZE_OPTIONS.EXTRASMALL) return "0 0 10 11";
  if (selected) return size === SIZE_OPTIONS.SMALL ? "0 0 40 43" : "0 0 54 54";
  return size === SIZE_OPTIONS.SMALL ? "0 0 34 36" : "0 0 47 46";
};

const StyledSeat = styled.svg`
  flex-shrink: 0;
  position: relative;
  font-family: ${({ theme }) => theme.orbit.fontFamily};
  margin-right: ${({ selected, size }) =>
    selected && (size === SIZE_OPTIONS.SMALL ? `-7px !important` : `-8px !important`)};
  ${getSize};
`;

StyledSeat.defaultProps = {
  theme: defaultTheme,
};

const Seat = ({
  type = TYPES.DEFAULT,
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
    <Stack inline grow={false} spacing="XXXSmall" direction="column" align="center">
      <StyledSeat
        viewBox={resolveViewBoxSize(size, selected)}
        aria-labelledby={`${titleId} ${descrId}`}
        size={size}
        fill="none"
        role="img"
        selected={selected}
        data-test={dataTest}
      >
        <title id={titleId}>{title}</title>
        <desc id={descrId}>{description}</desc>
        <SeatItem type={type} selected={selected} size={size} price={price} label={label} />
      </StyledSeat>
      {price && !(selected && type === TYPES.UNAVAILABLE) && size !== SIZE_OPTIONS.EXTRASMALL && (
        <Text size="small" type="secondary">
          {price}
        </Text>
      )}
    </Stack>
  );
};

export default Seat;
