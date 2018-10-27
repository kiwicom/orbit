// @flow
import * as React from "react";
import styled, { css } from "styled-components";

import Heading from "../Heading";
import Stack from "../Stack";
import ArrowUpIcon from "../icons/ArrowUp";
import defaultTokens from "../defaultTokens";
import FlightDirectIcon from "../icons/FlightDirect";
import { BASE_URL, SMALLEST_HEIGHT } from "./consts";

import type { Props, State } from "./index";

type SmallHeadingType = {|
  children: React.Node,
|};

const StyledDestinationCard = styled(({ height, imageURL, theme, ...props }) => <div {...props} />)`
  width: 100%;
  height: ${({ height }) => (height ? `${height}px` : "100%")};
  display: flex;
  align-items: flex-end;
  position: relative;
  box-sizing: border-box;
  background: url(${({ imageURL }) => imageURL}) no-repeat center/cover;
  border-radius: ${({ theme }) => theme.orbit.borderRadiusNormal};
  overflow: hidden;
  cursor: pointer;
`;

StyledDestinationCard.defaultProps = {
  theme: defaultTokens,
};

const overlayCss = css`
  position: absolute;
  top: 0;
  left: 0;
  z-index: 1;
  width: 100%;
  height: 100%;
  border-radius: ${({ theme }) => theme.orbit.borderRadiusNormal};
  transition: opacity ${({ theme }) => theme.orbit.durationFast} ease-in-out;
`;

const StyledOverlay = styled.div`
  ${overlayCss};
  opacity: ${({ shown }) => (shown ? "0" : "1")};
  background: linear-gradient(
    to bottom,
    rgba(0, 0, 0, 0) 0%,
    rgba(0, 0, 0, 0) 50%,
    rgba(0, 0, 0, 0.13) 65%,
    rgba(0, 0, 0, 0.3) 75%,
    rgba(0, 0, 0, 0.8) 100%
  );
`;

StyledOverlay.defaultProps = {
  theme: defaultTokens,
};

const StyledOverlayHover = styled.div`
  ${overlayCss};
  opacity: ${({ shown }) => (shown ? "1" : "0")};
  background: rgba(0, 0, 0, 0.8);
`;

StyledOverlayHover.defaultProps = {
  theme: defaultTokens,
};

const StyledDestinationCardContent = styled.div`
  position: relative;
  z-index: 2;
  display: flex;
  flex-direction: column;
  padding: ${({ theme }) => theme.orbit.spaceSmall};
  width: 100%;
  transition: bottom ${({ theme }) => theme.orbit.durationFast} ease-in-out;
  bottom: ${({ shown, hiddenContentHeight, theme }) =>
    shown ? "0" : `-${hiddenContentHeight + parseInt(theme.orbit.spaceSmall, 10)}px`};
`;

StyledDestinationCardContent.defaultProps = {
  theme: defaultTokens,
};

const StyledDestinationCardHeader = styled.div`
  margin-bottom: ${({ theme }) => theme.orbit.spaceXSmall};
`;

StyledDestinationCardHeader.defaultProps = {
  theme: defaultTokens,
};

const Shown = styled.div`
  transition: all ${({ theme }) => theme.orbit.durationFast} ease-in-out;
  opacity: ${({ shown }) => (shown ? "1" : "0")};
  position: relative;
  top: ${({ shown }) => (shown ? "0" : "-50%")};
`;

Shown.defaultProps = {
  theme: defaultTokens,
};

// TODO: use Stack when update will be merged
const StyledDeparture = styled(Shown)`
  display: flex;
  justify-content: flex-start;
  align-items: center;
`;

const ArrowUp = styled(ArrowUpIcon)`
  transform: rotate(90deg);
  margin-left: ${({ theme }) => theme.orbit.spaceXXSmall};
`;

ArrowUp.defaultProps = {
  theme: defaultTokens,
};

const StyledDestinationCardPriceStay = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: ${({ theme }) => theme.orbit.spaceSmall};
`;

StyledDestinationCardPriceStay.defaultProps = {
  theme: defaultTokens,
};

const StyledDestinationCardHiddenContent = styled.div`
  padding: ${({ theme }) => theme.orbit.spaceSmall} 0 0;
  border-top: 1px solid rgba(255, 255, 255, 0.3);
`;

StyledDestinationCardHiddenContent.defaultProps = {
  theme: defaultTokens,
};

const FlightDirect = styled(FlightDirectIcon)`
  transform: ${({ isReturn }) => isReturn && "rotate(180deg)"};
`;

const StyledDestination = styled.div`
  position: relative;
  transition: top ${({ theme }) => theme.orbit.durationFast} ease-in-out;
  top: ${({ shown }) => (shown ? "0" : "16px")};
`;

StyledDestination.defaultProps = {
  theme: defaultTokens,
};

const SmallHeading = ({ children }: SmallHeadingType) => (
  <Heading type="title4" inverted>
    {children}
  </Heading>
);

class DestinationCard extends React.PureComponent<Props, State> {
  constructor(props: Props) {
    super(props);
    this.hiddenContent = React.createRef();
    this.hiddenContentHeight = 0;
    this.state = {
      shown: false,
    };
  }

  componentDidMount() {
    this.setHeight();
  }

  componentDidUpdate() {
    this.setHeight();
  }

  setHeight = () => {
    const { hiddenContent } = this;
    if (hiddenContent.current) {
      this.hiddenContentHeight = hiddenContent.current.clientHeight;
    }
  };

  handleIn = () => {
    if (!this.state.shown) {
      this.setState({ shown: true });
    }
  };

  handleOut = () => {
    if (this.state.shown) {
      this.setState({ shown: false });
    }
  };

  hiddenContent: { current: any | HTMLDivElement };
  hiddenContentHeight: number;

  render() {
    const {
      dataTest,
      departureCity,
      destinationCity,
      destinationCountry,
      image,
      price,
      timeOfStay,
      outbound,
      inbound,
      height = 300,
      onClick,
    } = this.props;
    const { shown } = this.state;
    const { hiddenContentHeight } = this;

    const imageURL = `${BASE_URL}/photos/1200x628/${image}.jpg`;

    return (
      <StyledDestinationCard
        data-test={dataTest}
        onClick={onClick}
        onMouseEnter={this.handleIn}
        onMouseLeave={this.handleOut}
        onFocus={this.handleIn}
        onBlur={this.handleOut}
        imageURL={imageURL}
        height={height >= 175 ? height : SMALLEST_HEIGHT}
      >
        <StyledOverlay shown={shown} />
        <StyledOverlayHover shown={shown} />
        <StyledDestinationCardContent shown={shown} hiddenContentHeight={hiddenContentHeight}>
          <StyledDestinationCardHeader>
            <StyledDeparture shown={shown}>
              <Heading type="title3" inverted>
                {departureCity}
              </Heading>
              <ArrowUp customColor="#fff" size="small" />
            </StyledDeparture>
            <StyledDestination shown={shown}>
              <Heading type="title1" inverted>
                {destinationCity}
              </Heading>
            </StyledDestination>
            <Shown shown={shown}>
              <SmallHeading>{destinationCountry}</SmallHeading>
            </Shown>
          </StyledDestinationCardHeader>
          <StyledDestinationCardPriceStay>
            <SmallHeading>{price}</SmallHeading>
            {timeOfStay && <SmallHeading>{timeOfStay}</SmallHeading>}
          </StyledDestinationCardPriceStay>
          <StyledDestinationCardHiddenContent innerRef={this.hiddenContent}>
            <Stack align="even" direction="row">
              <SmallHeading>
                {outbound.text ? (
                  outbound.text
                ) : (
                  <React.Fragment>
                    <FlightDirect size="small" />
                    {outbound.date}
                  </React.Fragment>
                )}
              </SmallHeading>
              <SmallHeading>
                {outbound.type}&nbsp;•&nbsp;{outbound.duration}
              </SmallHeading>
            </Stack>
            {inbound && (
              <Stack align="even" direction="row">
                <SmallHeading>
                  <FlightDirect size="small" isReturn />
                  {inbound.date}
                </SmallHeading>
                <SmallHeading>
                  {inbound.type}&nbsp;•&nbsp;{inbound.duration}
                </SmallHeading>
              </Stack>
            )}
          </StyledDestinationCardHiddenContent>
        </StyledDestinationCardContent>
      </StyledDestinationCard>
    );
  }
}

export default DestinationCard;
