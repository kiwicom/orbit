// @flow
import * as React from "react";
import styled, { keyframes, css } from "styled-components";

import defaultTokens from "../defaultTokens";
import CarrierLogo, { StyledCarrierLogo } from "../CarrierLogo";
import Airplane from "../icons/Airplane";
import ShowMore from "../icons/ShowMore";
import ShowLess from "../icons/ShowLess";
import Bus from "../icons/Bus";
import Train from "../icons/Train";
import Text from "../Text";
import { Item } from "../List/ListItem";

import type { Props } from "./index";

type State = {|
  shown: boolean,
|};

const ToggleUp = contentHeight => keyframes`
  0% { max-height: ${contentHeight}px; opacity: 1 }
  100% { max-height: 0; opacity: 0 }
`;

const ToggleDown = contentHeight => keyframes`
  0% { max-height: 0; opacity: 0; overflow: hidden }
  100% { max-height: ${contentHeight}px; opacity: 1; overflow: visible }
`;

const Milestone = styled.div`
  display: flex;
  height: 55px;
  width: 27px;
  align-items: center;
`;

const ArrowDecor = styled.div`
  position: relative;
  right: -10px;
  z-index: 1;
  &:before {
    position: absolute;
    right: 100%;
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
  }
`;

Milestone.defaultProps = {
  theme: defaultTokens,
};

ArrowDecor.defaultProps = {
  theme: defaultTokens,
};

export const StyledSegment = styled(({ className, children }) => (
  <div className={className}>{children}</div>
))`
  display: flex;
  font-family: ${({ theme }) => theme.orbit.fontFamily};
  font-size: ${({ theme }) => theme.orbit.fontSizeTextNormal};
  flex-direction: row;
  flex-wrap: wrap;
  width: 100%;
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
    width: 11px;
  }
`;

Chevrones.defaultProps = {
  theme: defaultTokens,
};

export const ChildrenWrapper = styled.div`
  width: 100%;
  position: relative;
  overflow: hidden;
  flex-wrap: wrap;
  padding: ${({ theme, shown }) => shown && `${theme.orbit.spaceMedium} 0`};
  max-height: ${({ shown, contentHeight }) => (shown ? `${contentHeight}px` : "0")};
  animation: ${({ shown, theme, contentHeight }) =>
    shown
      ? `${theme.orbit.durationFast}${ToggleUp(contentHeight)} linear;
        `
      : `${theme.orbit.durationFast}${ToggleDown(contentHeight)} linear;
        `};
  transition: max-height ${({ theme }) => theme.orbit.durationFast} linear,
    padding ${({ theme }) => theme.orbit.durationFast} linear;

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

  componentDidMount() {
    setTimeout(() => {
      this.setHeight();
    }, 250);
  }

  setHeight() {
    const { node } = this;
    if (node instanceof HTMLElement) {
      const element = Array.from(node.childNodes).find((item, index) => index === 0 && item);
      this.contentHeight = Object.values(element.childNodes).reduce(
        // $FlowExpected
        (acc, child) => acc + child.offsetHeight,
        0,
      );
    }
  }

  handleToggle = () => {
    const { onClick } = this.props;
    this.setState(prevState => ({
      shown: !prevState.shown,
    }));

    if (onClick) {
      onClick();
    }
  };

  contentHeight = 0;
  node = {};

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
    const { contentHeight } = this;

    return (
      <Wrapper>
        <Milestone>
          <Icon />
          <ArrowDecor />
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
            <WrapperCarrier>
              <Text size="small" type="secondary">
                {`~${duration}`}
              </Text>
              <CarrierLogo carriers={[{ code, name, type }]} />
              <Chevrones>
                {shown ? (
                  <ShowLess size="large" color="secondary" />
                ) : (
                  <ShowMore size="large" color="secondary" />
                )}
              </Chevrones>
            </WrapperCarrier>
          </WrapperInner>
          <ChildrenWrapper
            contentHeight={contentHeight}
            shown={shown}
            innerRef={node => {
              this.node = node;
            }}
          >
            {children}
          </ChildrenWrapper>
        </StyledSegment>
      </Wrapper>
    );
  }
}

export default TripSegment;
