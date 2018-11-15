// @flow
import * as React from "react";
import styled from "styled-components";

import Calendar from "../../icons/Calendar";
import defaultTokens from "../../defaultTokens";
import Text, { StyledText } from "../../Text";
import { left } from "../../utils/rtl";

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
    margin-${left}: ${({ theme }) => theme.orbit.spaceXSmall};
    height: ${({ theme }) => theme.orbit.heightIconSmall};
  }
`;

StyledTripDate.defaultProps = {
  theme: defaultTokens,
};

const TripDate = ({ children, dataTest }: Props) => (
  <StyledTripDate data-test={dataTest}>
    <Calendar size="small" />
    <Text type="attention">{children}</Text>
  </StyledTripDate>
);

export default TripDate;
