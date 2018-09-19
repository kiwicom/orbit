// @flow
import * as React from "react";
import styled from "styled-components";

import Calendar from "../icons/Calendar";
import defaultTokens from "../defaultTokens";
import { Milestone } from "../TripSegment";

import type { Props } from "./index";

const ItineraryDate = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: ${({ theme }) => theme.orbit.spaceSmall};
  font-weight: ${({ theme }) => theme.orbit.fontWeightMedium};
  color: ${({ theme }) => theme.orbit.paletteInkDark};
  font-size: ${({ theme }) => theme.orbit.fontSizeTextNormal};
  svg {
    padding-right: 8.5px;
  }
`;

ItineraryDate.defaultProps = {
  theme: defaultTokens,
};

const Wrapper = styled.div`
  position: relative;
  background: ${({ theme }) => theme.orbit.paletteWhite};
`;

const Timeline = styled.div`
  display: flex;
  position: relative;
  width: 100%;
  flex-direction: column;
  height: 100%;
  &:last-of-type {
    ${Milestone} {
      &:before {
        content: " ";
        position: absolute;
        height: 100%;
        background: ${({ theme }) => theme.orbit.paletteWhite};
        width: 20px;
        top: 20px;
      }
    }
  }
  &:before {
    content: " ";
    background: url("//kiwi.com/images/general/itinerary-border.svg") left top repeat-y;
    width: 2px;
    display: block;
    left: 7px;
    top: 0;
    position: absolute;
    height: 100%;
  }
`;

Timeline.defaultProps = {
  theme: defaultTokens,
};

Wrapper.defaultProps = {
  theme: defaultTokens,
};

const Itinerary = ({ children, date }: Props) => (
  <Wrapper>
    <ItineraryDate>
      <Calendar size="small" />
      {date}
    </ItineraryDate>
    <Timeline>{children}</Timeline>
  </Wrapper>
);

export default Itinerary;
