// @flow
import * as React from "react";
import styled from "styled-components";

import defaultTokens from "../defaultTokens";
import CarrierLogo, { StyledCarrierLogo } from "../CarrierLogo";
import Airplane from "../icons/Airplane";
import ShowMore from "../icons/ShowMore";
import ShowLess from "../icons/ShowLess";
import Bus from "../icons/Bus";
import Train from "../icons/Train";
import Text, { StyledText } from "../Text";
import ToggleUp from "../utils/toggleUp";
import ToggleDown from "../utils/toggleDown";
import { CARRIER_TYPE_OPTIONS } from "../CarrierLogo/consts";

import type { Props, State } from "./index";

export const Milestone = styled.div`
  display: flex;
  height: 50px;
  align-items: center;
  justify-content: space-between;
  svg {
    z-index: 1;
    padding: ${({ theme }) => `0 ${theme.orbit.spaceXXXSmall} 0 0`};
  }
`;

Milestone.defaultProps = {
  theme: defaultTokens,
};

const ArrowDecor = styled.div`
  position: relative;
  width: 6px;
  height: 12px;
  right: -1px;
  z-index: 1;
  &:before {
    position: absolute;
    content: " ";
    width: 0;
    height: 0;
    border-style: solid;
    border-width: 6px 6px 6px 0;
    border-color: transparent ${({ theme }) => theme.orbit.paletteCloudNormal} transparent
      transparent;
  }
  &:after {
    border-color: transparent ${({ theme }) => theme.orbit.paletteWhite} transparent transparent;
    width: 0;
    height: 0;
    border-style: solid;
    border-width: 4px 4px 4px 0;
    border-color: transparent ${({ theme }) => theme.orbit.paletteWhite} transparent transparent;
    margin-top: 2px;
    content: " ";
    position: absolute;
    right: 0;
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
  flex-direction: row;
  flex-wrap: wrap;
  width: 100%;
  background: ${({ theme }) => theme.orbit.backgroundCard};
  border-radius: ${({ theme }) => theme.orbit.borderRadiusNormal};
  border: ${({ theme }) =>
    `${theme.orbit.borderWidthCard} ${theme.orbit.borderStyleCard} ${
      theme.orbit.paletteCloudNormal
    }`};
`;

StyledSegment.defaultProps = {
  theme: defaultTokens,
};

const Wrapper = styled.div`
  display: flex;
  ${StyledText} {
    line-height: 1.2;
  }
`;

const WrapperCarrier = styled.div`
  display: flex;
  align-items: center;
  position: relative;
  left: ${({ theme }) => theme.orbit.spaceMedium};
`;

WrapperCarrier.defaultProps = {
  theme: defaultTokens,
};

const WrapperInner = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-between;
  align-items: center;
  padding: ${({ theme }) => theme.orbit.spaceXSmall};
  cursor: pointer;

  ${StyledCarrierLogo} {
    padding: ${({ theme }) => `0 ${theme.orbit.spaceXXSmall} 0
      ${theme.orbit.spaceXSmall}`};
  }
`;

WrapperInner.defaultProps = {
  theme: defaultTokens,
};

const FlightParts = styled.div`
  display: flex;
  flex-direction: column;
`;

const Dates = styled.div`
  display: flex;
  flex-direction: column;
`;

const Time = styled.div`
  padding-right: ${({ theme }) => theme.orbit.spaceSmall};
`;

Time.defaultProps = {
  theme: defaultTokens,
};

const Chevrons = styled.div`
  display: flex;
  background-color: ${({ theme }) => theme.orbit.paletteWhite};
  flex-direction: column;
`;

Chevrons.defaultProps = {
  theme: defaultTokens,
};

export const ChildrenWrapper = styled.div`
  width: 100%;
  overflow: ${({ toggle }) => (toggle ? "visible" : "hidden")};
  padding: 0 ${({ theme }) => theme.orbit.spaceXSmall};
  max-height: ${({ visible, contentHeight, toggle }) =>
    visible && (toggle ? `${contentHeight}px` : `0`)};
  animation: ${({ toggle, theme, contentHeight, visible }) =>
    visible &&
    (toggle
      ? `${theme.orbit.durationFast} ${ToggleDown(contentHeight)} linear`
      : `${theme.orbit.durationFast} ${ToggleUp(contentHeight)} linear`)};

  transition: max-height ${({ theme }) => theme.orbit.durationFast} linear,
    padding ${({ theme }) => theme.orbit.durationFast} linear;
  font-size: ${({ theme }) => theme.orbit.fontSizeTextSmall};
  }
`;

ChildrenWrapper.defaultProps = {
  theme: defaultTokens,
};

const ChildrenWrapperContent = styled.div`
  border-top: 1px solid ${({ theme }) => theme.orbit.paletteCloudNormal};
  padding: ${({ theme }) => theme.orbit.spaceXSmall} 0;
`;

ChildrenWrapperContent.defaultProps = {
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
    toggle: this.props.shown || false,
    visible: !this.props.shown,
  };

  componentDidMount() {
    setTimeout(() => {
      this.setHeight();
    }, 250);
  }

  setHeight() {
    const { node } = this;
    if (node instanceof HTMLElement) {
      this.contentHeight = Object.values(node.childNodes).reduce(
        (acc, child) => child instanceof HTMLElement && acc + child.offsetHeight,
        0,
      );
    }
  }

  handleToggle = () => {
    const { onClick } = this.props;
    this.setState(prevState => ({
      toggle: !prevState.toggle,
      visible: true,
    }));

    if (onClick) {
      onClick();
    }
  };

  contentHeight = 0;
  node: ?HTMLElement;

  render() {
    const {
      children,
      departure,
      departureTime,
      arrival,
      arrivalTime,
      duration,
      carrier,
    } = this.props;
    const { toggle, visible } = this.state;
    const { contentHeight } = this;

    return (
      <Wrapper>
        <Milestone>
          <Icon type={carrier.type || CARRIER_TYPE_OPTIONS.AIRLINE} />
          <ArrowDecor />
        </Milestone>
        <StyledSegment toggle={toggle}>
          <WrapperInner toggle={toggle} onClick={this.handleToggle}>
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
                <Text type="primary">{arrival}</Text>
                <Text type="primary">{departure}</Text>
              </FlightParts>
            </Wrapper>
            <WrapperCarrier>
              <Text type="secondary" size="small">{`~${duration}`}</Text>
              <CarrierLogo size="medium" carriers={[carrier]} />
              <Chevrons>
                {toggle ? (
                  <ShowLess size="small" color="secondary" />
                ) : (
                  <ShowMore size="small" color="secondary" />
                )}
              </Chevrons>
            </WrapperCarrier>
          </WrapperInner>
          <ChildrenWrapper
            contentHeight={contentHeight}
            toggle={toggle}
            visible={visible}
            innerRef={node => {
              this.node = node;
            }}
          >
            <ChildrenWrapperContent>{children}</ChildrenWrapperContent>
          </ChildrenWrapper>
        </StyledSegment>
      </Wrapper>
    );
  }
}

export default TripSegment;
