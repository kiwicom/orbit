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

const StyledWrapperText = styled.div`
  padding-right: ${({ selected, size }) =>
    selected && (size === SIZE_OPTIONS.SMALL ? "6px" : "7px")};
`;

const getSize = ({ size, selected }) => {
  const height = {
    [SIZE_OPTIONS.SMALL]: selected ? "43px" : "36px",
    [SIZE_OPTIONS.MEDIUM]: selected ? "54px" : "46px",
  };

  const width = {
    [SIZE_OPTIONS.SMALL]: selected ? "40px" : "34px",
    [SIZE_OPTIONS.MEDIUM]: selected ? "54px" : "47px",
  };

  return `width: ${width[size]}; height: ${height[size]};`;
};

const resolveViewBoxSize = (size, selected) => {
  if (selected) return size === SIZE_OPTIONS.SMALL ? "0 0 40 43" : "0 0 54 54";
  return size === SIZE_OPTIONS.SMALL ? "0 0 34 36" : "0 0 47 46";
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
      {price && !(selected && type === TYPES.UNAVAILABLE) && (
        <StyledWrapperText selected={selected}>
          <Text size="small" type="secondary">
            {price}
          </Text>
        </StyledWrapperText>
      )}
    </Stack>
  );
};

export default Seat;
