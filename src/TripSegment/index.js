// @flow
import * as React from "react";
import styled, { keyframes, css } from "styled-components";

import ChevronUp from "../icons/ChevronUp";
import ChevronDown from "../icons/ChevronDown";
import defaultTokens from "../defaultTokens";
import CarrierLogo, { StyledCarrierLogo } from "../CarrierLogo";
import Airplane from "../icons/Airplane";
import Bus from "../icons/Bus";
import Train from "../icons/Train";
import Text from "../Text";
import { Item } from "../List/ListItem";

import type { Props } from "./index";

type State = {|
  shown: boolean,
|};

// TODO: Fix animations
const ToggleUp = keyframes`
  from { max-height: 0%; overflow: hidden; opacity: 0 }
  to { max-height: 100%; overflow: visible; top: 0; opacity: 1 }
`;

const ToggleDown = keyframes`
  0% { max-height: 0;  overflow: hidden; opacity: 1}
  75% { opacity: 0.4; max-height: 50% }
  100%  { max-height: 100%; overflow: visible; opacity: 0}
`;

const Milestone = styled.div`
  display: flex;
  height: 55px;
  align-items: center;
  padding-right: ${({ theme }) => theme.orbit.spaceXSmall};
`;

Milestone.defaultProps = {
  theme: defaultTokens,
};

export const StyledSegment = styled(({ className, children }) => (
  <div className={className}>{children}</div>
))`
  display: flex;
  font-family: ${({ theme }) => theme.orbit.fontFamily};
  font-size: ${({ theme }) => theme.orbit.fontSizeTextNormal};
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  max-width: 289px;
  border-radius: 3px;
  flex-wrap: wrap;
  padding: ${({ theme }) => theme.orbit.spaceXSmall};
  background: ${({ theme }) => theme.orbit.backgroundCard};
  border-radius: ${({ theme }) => theme.orbit.borderRadiusNormal};
  border-width: ${({ theme }) => theme.orbit.borderWidthCard};
  border-style: ${({ theme }) => theme.orbit.borderStyleCard};
  border-color: ${({ theme }) => theme.orbit.paletteCloudNormal};
  position: relative;
  &:hover {
    cursor: pointer;
  }
  &:before {
    position: absolute;
    right: 100%;
    top: 27px;
    content: " ";
    width: 0;
    height: 0;
    border-style: solid;
    border-width: 6px 6px 6px 0;
    border-color: transparent ${({ theme }) => theme.orbit.paletteCloudNormal} transparent
      transparent;
    margin-top: -7px;
  }
  &:after {
    border-color: transparent ${({ theme }) => theme.orbit.paletteWhite} transparent transparent;
    width: 0;
    height: 0;
    border-style: solid;
    border-width: 4px 4px 4px 0;
    border-color: transparent ${({ theme }) => theme.orbit.paletteWhite} transparent transparent;
    margin-top: -5px;
    content: " ";
    position: absolute;
    right: 100%;
    top: 27px;
  }
`;

StyledSegment.defaultProps = {
  theme: defaultTokens,
};

const Flights = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`;

const Wrapper = styled.div`
  display: flex;
`;

const WrapperInner = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-between;
  align-items: center;
  ${StyledCarrierLogo} {
    padding-left: ${({ theme }) => theme.orbit.spaceXSmall};
    padding-right: ${({ theme }) => theme.orbit.spaceXXSmall};
`;

WrapperInner.defaultProps = {
  theme: defaultTokens,
};

const FlightPart = styled.div`
  display: flex;
`;

const Time = styled.div`
  padding-right: ${({ theme }) => theme.orbit.spaceSmall};
`;

Time.defaultProps = {
  theme: defaultTokens,
};

export const Chevrones = styled.div`
  display: flex;
  flex-direction: column;
  background: ${({ theme }) => theme.orbit.paletteWhite};
  position: absolute;
  top: 15px;
  right: -8.4px;
  svg {
    height: 11px;
    transform: rotate(${({ rotate }) => `${rotate})`};
  }
`;

Chevrones.defaultProps = {
  theme: defaultTokens,
};

export const ChildrenWrapper = styled.div`
  width: 100%;
  position: relative;
  flex-wrap: wrap;
  height: auto;
  ${({ shown }) =>
    shown
      ? css`
          opacity: 1;
          max-height: 100%;
          margin-top: ${({ theme }) => theme.orbit.spaceXSmall};
        `
      : `opacity: 0; max-height: 0`};
  animation: ${({ shown }) => (shown ? `${ToggleUp} .4s linear;` : `${ToggleDown} .4s linear`)};
  font-size: ${({ theme }) => theme.orbit.spaceSmall};
  ${({ shown }) =>
    shown &&
    css`
      padding-top: ${({ theme }) => theme.orbit.spaceSmall};
      &:before {
        content: "";
        width: 100%;
        position: absolute;
        top: 0;
        height: 1px;
        background: ${({ theme }) => theme.orbit.paletteCloudNormal};
      }
    `};
  ${Item} {
    margin-bottom: ${({ theme }) => theme.orbit.spaceXXSmall};
  }
`;

ChildrenWrapper.defaultProps = {
  theme: defaultTokens,
};

class TripSegment extends React.PureComponent<Props, State> {
  state = {
    shown: false,
  };

  handleToggle = () => {
    const { onClick } = this.props;
    this.setState(prevState => ({
      shown: !prevState.shown,
    }));

    if (onClick) {
      onClick();
    }
  };

  render() {
    const {
      children,
      departureCity,
      arrivalCity,
      departureTime,
      arrivalTime,
      departureCode,
      arrivalCode,
      duration,
      code,
      name,
      type,
    } = this.props;
    const { shown } = this.state;

    return (
      <Wrapper>
        <Milestone>
          {type === "airline" && <Airplane size="small" color="secondary" />}
          {type === "train" && <Train size="small" color="secondary" />}
          {type === "bus" && <Bus size="small" color="secondary" />}
        </Milestone>
        <StyledSegment>
          <WrapperInner onClick={this.handleToggle}>
            <Flights>
              <FlightPart>
                <Time>
                  <Text type="attention">{arrivalTime}</Text>
                </Time>
                <Text type="primary">
                  {arrivalCity} {arrivalCode}
                </Text>
              </FlightPart>
              <FlightPart>
                <Time>
                  <Text type="attention">{departureTime}</Text>
                </Time>
                <Text type="primary">
                  {departureCity} {departureCode}
                </Text>
              </FlightPart>
            </Flights>
            <Text size="small" type="secondary">
              {duration}
            </Text>
            <CarrierLogo size="large" carriers={[{ code, name, type }]} />
            <Chevrones rotate={shown === true ? "180deg" : "0deg"}>
              <ChevronUp size="small" color="secondary" />
              <ChevronDown size="small" color="secondary" />
            </Chevrones>
          </WrapperInner>
          <ChildrenWrapper shown={shown}>{children}</ChildrenWrapper>
        </StyledSegment>
      </Wrapper>
    );
  }
}

export default TripSegment;
