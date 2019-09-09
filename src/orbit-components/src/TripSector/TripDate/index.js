// @flow
import * as React from "react";
import styled from "styled-components";

import Calendar from "../../icons/Calendar";
import defaultTheme from "../../defaultTheme";
import Text, { StyledText } from "../../Text";
import Clock from "../../icons/Clock";
import Stack from "../../Stack";
import Badge from "../../Badge";

import type { Props } from "./index";

const StyledTripDate = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: ${({ theme }) => theme.orbit.spaceXSmall};
  padding-bottom: ${({ theme }) => theme.orbit.spaceXXSmall};
  background: ${({ theme }) => theme.orbit.paletteWhite};
  z-index: 1;

  ${StyledText} {
    font-weight: ${({ theme }) => theme.orbit.fontWeightMedium};
    height: ${({ theme }) => theme.orbit.heightIconSmall};
  }
`;

StyledTripDate.defaultProps = {
  theme: defaultTheme,
};

const TripDate = ({ children, dataTest, duration }: Props) => (
  <StyledTripDate data-test={dataTest}>
    <Stack direction="row" spacing="condensed" shrink>
      <Calendar size="small" />
      <Text>{children}</Text>
    </Stack>
    {duration && <Badge icon={<Clock />}>{duration}</Badge>}
  </StyledTripDate>
);

export default TripDate;
