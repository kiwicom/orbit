// @flow
import * as React from "react";
import styled, { css } from "styled-components";

import defaultTokens from "../defaultTokens";
import CarrierLogo, { StyledCarrierLogo } from "../CarrierLogo";
import Airplane from "../icons/Airplane";
import ShowMore from "../icons/ShowMore";
import ShowLess from "../icons/ShowLess";
import Bus from "../icons/Bus";
import Train from "../icons/Train";
import Text, { StyledText } from "../Text";
import { Item } from "../List/ListItem";
import ToggleUp from "../utils/toggleUp";
import ToggleDown from "../utils/toggleDown";

import type { Props, State } from "./index";

export const Milestone = styled.div`
  display: flex;
  max-width: 26px;
  width: 100%;
  height: 50px;
  align-items: center;
  svg {
    background-color: ${({ theme }) => theme.orbit.paletteWhite};
    padding: 5px 0;
    z-index: 1;
  }
`;

Milestone.defaultProps = {
  theme: defaultTokens,
};

const ArrowDecor = styled.div`
  position: relative;
  right: -11px;
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
  padding: ${({ theme }) => theme.orbit.spaceXSmall} ${({ theme }) => theme.orbit.spaceSmall}
    ${({ theme }) => theme.orbit.spaceXSmall} ${({ theme }) => theme.orbit.spaceXSmall};
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

const Wrapper = styled.div`
  display: flex;
`;

const WrapperCarrier = styled.div`
  display: flex;
  align-items: center;
`;

const WrapperInner = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-between;
  align-items: center;
  padding-bottom: ${({ shown }) =>
    shown &&
    css`
      ${({ theme }) => theme.orbit.spaceXSmall};
    `};
  ${StyledCarrierLogo} {
    padding-left: ${({ theme }) => theme.orbit.spaceXSmall};
  }
`;

WrapperInner.defaultProps = {
  theme: defaultTokens,
};

const FlightParts = styled.div`
  display: flex;
  flex-direction: column;
  ${StyledText} {
    line-height: 1.2;
  }
`;

const Dates = styled.div`
  display: flex;
  flex-direction: column;
  ${StyledText} {
    line-height: 1.2;
  }
`;

const Time = styled.div`
  padding-right: ${({ theme }) => theme.orbit.spaceSmall};
`;

Time.defaultProps = {
  theme: defaultTokens,
};

const Chevrones = styled.div`
  display: flex;
  flex-direction: column;
  background: ${({ theme }) => theme.orbit.paletteWhite};
  position: absolute;
  right: -6.4px;
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

const Icon = ({ type }) => {
  switch (type) {
    case "airline":
      return <Airplane size="small" color="secondary" />;
    case "train":
      return <Train size="small" color="secondary" />;
    case "bus":
      return <Bus size="small" color="secondary" />;
    default:
      return <Airplane size="small" color="secondary" />;
  }
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
      departure,
      departureTime,
      arrival,
      type,
      arrivalTime,
      duration,
      carrier,
    } = this.props;
    const { shown } = this.state;
    const { contentHeight } = this;

    return (
      <Wrapper>
        <Milestone>
          <Icon type={type} />
          <ArrowDecor />
        </Milestone>
        <StyledSegment>
          <WrapperInner shown={shown} onClick={this.handleToggle}>
            <Wrapper>
              <Dates>
                <Time>
                  <Text type="attention">{arrivalTime}</Text>
                </Time>
                <Time>
                  <Text type="attention">{departureTime}</Text>
                </Time>
              </Dates>
              <FlightParts>
                <Text type="primary">
                  {arrival.city} {arrival.code}
                </Text>
                <Text type="primary">
                  {departure.city} {departure.code}
                </Text>
              </FlightParts>
            </Wrapper>
            <WrapperCarrier>
              <Text type="secondary">{`~${duration}`}</Text>
              <CarrierLogo size="medium" carriers={[carrier]} />
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
