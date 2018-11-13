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
import { CARRIER_TYPE_OPTIONS } from "../CarrierLogo/consts";
import { getSize } from "../Icon";
import { ICON_SIZES } from "../Icon/consts";

import type { Props, State, ExpandedType } from "./index";

export const StyledTripSegment = styled.div`
  display: flex;
  width: 100%;
`;

export const StyledTripSegmentMilestone = styled.div`
  display: flex;
  height: 50px;
  width: ${getSize(ICON_SIZES.MEDIUM)};
  align-items: center;
  justify-content: space-between;
  flex: 0 0 auto;
  cursor: pointer;
  z-index: 1;

  > svg {
    z-index: 1;
    height: ${getSize(ICON_SIZES.MEDIUM)};
    background: ${({ theme }) => theme.orbit.paletteWhite};
    transition: color ${({ theme }) => theme.orbit.durationFast} ease-in-out;
  }
`;

StyledTripSegmentMilestone.defaultProps = {
  theme: defaultTokens,
};

const StyledTripSegmentMilestoneArrow = styled.div`
  position: relative;
  width: 6px;
  height: 12px;
  right: -1px;
  z-index: 1;
  &:before,
  &:after {
    position: absolute;
    content: " ";
    width: 0;
    height: 0;
    border-style: solid;
    transition: border-color ${({ theme }) => theme.orbit.durationFast} ease-in-out;
  }
  &:before {
    border-width: 6px 6px 6px 0;
    border-color: transparent ${({ theme }) => theme.orbit.paletteCloudNormal} transparent
      transparent;
  }
  &:after {
    border-color: transparent ${({ theme }) => theme.orbit.paletteWhite} transparent transparent;
    border-width: 4px 4px 4px 0;
    border-color: transparent ${({ theme }) => theme.orbit.paletteWhite} transparent transparent;
    margin: 2px 0 0 0;
    right: 0;
  }
`;

StyledTripSegmentMilestoneArrow.defaultProps = {
  theme: defaultTokens,
};

const StyledTripSegmentContent = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  width: 100%;
  background: ${({ theme }) => theme.orbit.paletteWhite};
  border-radius: ${({ theme }) => theme.orbit.borderRadiusNormal};
  border: ${({ theme }) =>
    `${theme.orbit.borderWidthCard} ${theme.orbit.borderStyleCard} ${
      theme.orbit.paletteCloudNormal
    }`};
  transition: border-color ${({ theme }) => theme.orbit.durationFast} ease-in-out;
`;

StyledTripSegmentContent.defaultProps = {
  theme: defaultTokens,
};

const StyledChevrons = styled.div`
  display: flex;
  background-color: ${({ theme }) => theme.orbit.paletteWhite};
  flex-direction: column;

  > svg {
    transition: color ${({ theme }) => theme.orbit.durationFast} ease-in-out;
  }
`;

StyledChevrons.defaultProps = {
  theme: defaultTokens,
};

const Chevrons = ({ expanded }: ExpandedType) => (
  <StyledChevrons>
    {expanded ? (
      <ShowLess size="small" color="secondary" />
    ) : (
      <ShowMore size="small" color="secondary" />
    )}
  </StyledChevrons>
);

const StyledTripSegmentOverview = styled.div`
  display: flex;
  ${StyledText} {
    line-height: 1.2;
  }
  &:hover {
    ${StyledTripSegmentContent} {
      border-color: ${({ theme }) => theme.orbit.paletteCloudNormalHover};
    }
    ${StyledTripSegmentMilestone}, ${StyledChevrons} {
      svg {
        color: ${({ theme }) => theme.orbit.colorIconPrimary};
      }
    }
    ${StyledTripSegmentMilestoneArrow} {
      &:before {
        border-color: transparent ${({ theme }) => theme.orbit.paletteCloudNormalHover} transparent
          transparent;
      }
    }
  }
`;

StyledTripSegmentOverview.defaultProps = {
  theme: defaultTokens,
};

const StyledTripSegmentCarrier = styled.div`
  display: flex;
  align-items: center;
  position: relative;
  left: ${({ theme }) => theme.orbit.spaceMedium};
`;

StyledTripSegmentCarrier.defaultProps = {
  theme: defaultTokens,
};

const StyledTripSegmentOverviewWrapper = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-between;
  align-items: center;
  padding: ${({ theme }) => theme.orbit.spaceXSmall};
  cursor: pointer;

  ${StyledCarrierLogo} {
    box-sizing: initial;
    margin: ${({ theme }) => `0 ${theme.orbit.spaceXXSmall} 0
      ${theme.orbit.spaceXSmall}`};
  }
`;

StyledTripSegmentOverviewWrapper.defaultProps = {
  theme: defaultTokens,
};

const StyledTripSegmentOverviewColumn = styled.div`
  display: flex;
  flex-direction: column;
`;

const StyledTripSegmentOverviewTime = styled.div`
  padding: 0 ${({ theme }) => theme.orbit.spaceSmall} 0 0;
`;

StyledTripSegmentOverviewTime.defaultProps = {
  theme: defaultTokens,
};

const StyledTripSegmentChildren = styled.div`
  box-sizing: initial;
  width: 100%;
  padding: ${({ theme, expanded }) => (expanded ? `${theme.orbit.spaceXSmall} 0` : "0")};
  margin: ${({ theme }) => `0 ${theme.orbit.spaceXSmall}`};
  border-top: ${({ theme, expanded }) =>
    expanded
      ? `1px solid ${theme.orbit.paletteCloudNormal}`
      : `0px solid ${theme.orbit.paletteCloudNormal}`};
  max-height: ${({ initialExpanded, contentHeight, expanded }) =>
    initialExpanded && (expanded ? `${contentHeight}px` : `0`)};
  transition: max-height ${({ theme }) => theme.orbit.durationFast} linear,
    padding ${({ theme }) => theme.orbit.durationFast} linear,
    border-top ${({ theme }) => theme.orbit.durationFast} linear;
  overflow: hidden;
`;

StyledTripSegmentChildren.defaultProps = {
  theme: defaultTokens,
};

const MilestoneIcon = ({ type }) => {
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
  constructor(props: Props) {
    super(props);
    this.contentHeight = 0;
    this.node = React.createRef();
    this.state = {
      expanded: this.props.initialExpanded || false,
      initialExpanded: !this.props.initialExpanded,
    };
  }

  componentDidMount() {
    setTimeout(() => {
      this.setHeight();
    }, 500);
  }

  setHeight() {
    this.contentHeight = this.node?.current.clientHeight;
  }

  handleToggle = () => {
    const { onClick } = this.props;
    this.setState(prevState => ({
      expanded: !prevState.expanded,
      initialExpanded: true,
    }));

    if (onClick) {
      onClick();
    }
  };

  contentHeight: number;
  node: { current: any | HTMLDivElement };

  render() {
    const {
      children,
      departure,
      departureTime,
      arrival,
      arrivalTime,
      duration,
      carrier,
      dataTest,
    } = this.props;
    const { expanded, initialExpanded } = this.state;
    const { contentHeight } = this;

    return (
      <StyledTripSegment dataTest={dataTest}>
        <StyledTripSegmentMilestone onClick={this.handleToggle}>
          <MilestoneIcon type={carrier.type || CARRIER_TYPE_OPTIONS.AIRLINE} />
          <StyledTripSegmentMilestoneArrow />
        </StyledTripSegmentMilestone>
        <StyledTripSegmentContent>
          <StyledTripSegmentOverviewWrapper onClick={this.handleToggle}>
            <StyledTripSegmentOverview>
              <StyledTripSegmentOverviewColumn>
                <StyledTripSegmentOverviewTime>
                  <Text type="attention" align="right">
                    {departureTime}
                  </Text>
                </StyledTripSegmentOverviewTime>
                <StyledTripSegmentOverviewTime>
                  <Text type="attention" align="right">
                    {arrivalTime}
                  </Text>
                </StyledTripSegmentOverviewTime>
              </StyledTripSegmentOverviewColumn>
              <StyledTripSegmentOverviewColumn>
                <Text type="primary">{departure}</Text>
                <Text type="primary">{arrival}</Text>
              </StyledTripSegmentOverviewColumn>
            </StyledTripSegmentOverview>
            <StyledTripSegmentCarrier>
              <Text type="secondary" size="small">
                {duration}
              </Text>
              <CarrierLogo size="medium" carriers={[carrier]} />
              <Chevrons expanded={expanded} />
            </StyledTripSegmentCarrier>
          </StyledTripSegmentOverviewWrapper>
          <StyledTripSegmentChildren
            expanded={expanded}
            contentHeight={contentHeight}
            initialExpanded={initialExpanded}
          >
            <div ref={this.node}>{children}</div>
          </StyledTripSegmentChildren>
        </StyledTripSegmentContent>
      </StyledTripSegment>
    );
  }
}

export default TripSegment;
