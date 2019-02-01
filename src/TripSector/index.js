// @flow
import * as React from "react";
import styled from "styled-components";

import { StyledTripSegment, StyledTripSegmentMilestone } from "../TripSegment";
import defaultTokens from "../defaultTokens";
import { left } from "../utils/rtl";

import type { Props } from "./index";

const StyledTripSector = styled.div`
  display: flex;
  position: relative;
  width: 100%;
  flex-direction: column;
  font-family: ${({ theme }) => theme.orbit.fontFamily};

  &:before {
    content: " ";
    display: block;
    position: absolute;
    background-color: ${({ theme }) => theme.orbit.paletteCloudNormal};
    width: 1px;
    height: 100%;
    ${left}: 7px;
    top: 0;
  }

  ${StyledTripSegment}:last-child {
    position: relative;

    ${StyledTripSegmentMilestone}:after {
      content: " ";
      position: absolute;
      top: 13px;
      bottom: 0;
      width: 16px;
      background: ${({ theme }) => theme.orbit.paletteWhite};
    }
  }
`;

StyledTripSector.defaultProps = {
  theme: defaultTokens,
};

const TripSector = ({ children, dataTest }: Props) => (
  <StyledTripSector data-test={dataTest}>{children}</StyledTripSector>
);

export default TripSector;

export { default as TripDate } from "./TripDate";
export { default as TripLayover } from "./TripLayover";
