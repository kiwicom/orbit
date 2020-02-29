// @flow
import * as React from "react";
import styled, { css } from "styled-components";

import Heading from "../../Heading";
import Stack from "../../Stack";
import ArrowUpIcon from "../../icons/ArrowUp";
import defaultTheme from "../../defaultTheme";
import FlightDirectIcon from "../../icons/FlightDirect";
import { BASE_URL, SMALLEST_HEIGHT } from "./consts";
import LazyImage from "../../LazyImage";
import Text from "../../Text";
import randomID from "../../utils/randomID";
import handleKeyDown from "../../utils/handleKeyDown";

import type { Props, State } from "./index";

type SmallHeadingType = {|
  children: React.Node,
|};

const overlayCss = css`
  position: absolute;
  top: 0;
  left: 0;
  z-index: 1;
  width: 100%;
  height: 100%;
  border-radius: ${({ theme }) => theme.orbit.borderRadiusNormal};
  transition: opacity ${({ theme }) => theme.orbit.durationNormal} ease-in-out;
`;

const StyledOverlay = styled.div`
  ${overlayCss};
  opacity: 1;
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
  theme: defaultTheme,
};

const StyledOverlayHover = styled.div`
  ${overlayCss};
  opacity: 0;
  background: rgba(0, 0, 0, 0.8);
`;

StyledOverlayHover.defaultProps = {
  theme: defaultTheme,
};

const StyledDestinationCardContent = styled.div`
  position: relative;
  z-index: 2;
  display: flex;
  flex-direction: column;
  padding: ${({ theme }) => theme.orbit.spaceSmall};
  width: 100%;
  transition: bottom ${({ theme }) => theme.orbit.durationFast} ease-in-out;
  bottom: ${({ hiddenContentHeight, theme }) =>
    `-${hiddenContentHeight + parseInt(theme.orbit.spaceSmall, 10)}px`};
`;

StyledDestinationCardContent.defaultProps = {
  theme: defaultTheme,
};

const StyledDestinationCardHeader = styled.div`
  margin-bottom: ${({ theme }) => theme.orbit.spaceXSmall};
`;

StyledDestinationCardHeader.defaultProps = {
  theme: defaultTheme,
};

const Shown = styled.div`
  transition: all ${({ theme }) => theme.orbit.durationFast} ease-in-out;
  opacity: 0;
  position: relative;
  top: "-50%";
  margin-bottom: ${({ theme }) => theme.orbit.spaceXXSmall};
`;

Shown.defaultProps = {
  theme: defaultTheme,
};

const ArrowUp = styled(ArrowUpIcon)`
  transform: rotate(90deg);
  margin-left: ${({ theme }) => theme.orbit.spaceXXSmall};
`;

ArrowUp.defaultProps = {
  theme: defaultTheme,
};

const StyledDestinationCardHiddenContent = styled.div`
  padding: ${({ theme }) => theme.orbit.spaceSmall} 0 0;
  border-top: 1px solid rgba(255, 255, 255, 0.3);
`;

StyledDestinationCardHiddenContent.defaultProps = {
  theme: defaultTheme,
};

const FlightDirect = styled(FlightDirectIcon)`
  transform: ${({ isReturn }) => isReturn && "rotate(180deg)"};
`;

const StyledDestination = styled.div`
  position: relative;
  transition: top ${({ theme }) => theme.orbit.durationFast} ease-in-out;
  top: 16px;
`;

StyledDestination.defaultProps = {
  theme: defaultTheme,
};

const StyledDestinationCard = styled(({ height, imageURL, theme, ...props }) => <div {...props} />)`
  width: 100%;
  height: ${({ height }) => (height ? `${height}px` : "100%")};
  display: flex;
  align-items: flex-end;
  position: relative;
  box-sizing: border-box;
  border-radius: ${({ theme }) => theme.orbit.borderRadiusNormal};
  overflow: hidden;
  cursor: pointer;

  &:hover {
    ${StyledOverlay} {
      opacity: 0;
    }
    ${StyledDestination} {
      top: 0;
    }
    ${StyledOverlayHover} {
      opacity: 1;
    }
    ${StyledDestinationCardContent} {
      bottom: 0;
    }
    ${Shown} {
      opacity: 1;
      top: 0;
    }
  }
  &:focus {
    outline: none;
    box-shadow: 0 0 1px 1px ${({ theme }) => theme.orbit.colorTextButtonWhiteBordered},
      0 0 1px 3px rgba(1, 118, 210, 0.6); // TODO: Create token
  }
`;
StyledDestinationCard.defaultProps = {
  theme: defaultTheme,
};

const SmallHeading = ({ children }: SmallHeadingType) => (
  <Text type="white" element="div" size="small" weight="bold">
    {children}
  </Text>
);

class DestinationCard extends React.PureComponent<Props, State> {
  state = {
    hiddenContentHeight: 0,
  };

  hiddenContent: { current: any | HTMLDivElement } = React.createRef();

  cardID: string = randomID("destinationCardID");

  componentDidMount() {
    this.setHeight();
  }

  componentDidUpdate(prevProps: Props) {
    if (prevProps !== this.props) {
      this.setHeight();
    }
  }

  setHeight = () => {
    const { hiddenContent } = this;

    if (hiddenContent.current) {
      this.setState({
        hiddenContentHeight: hiddenContent.current.clientHeight,
      });
    }
  };

  render() {
    const {
      dataTest,
      departureCity,
      destinationCity,
      destinationCountry,
      price,
      timeOfStay,
      outbound,
      inbound,
      height = 300,
      onClick,
      tabIndex = "0",
    } = this.props;
    const { hiddenContentHeight } = this.state;

    const image = this.props.image.toLowerCase();

    return (
      <StyledDestinationCard
        data-test={dataTest}
        onClick={onClick}
        onKeyDown={ev => handleKeyDown(ev, onClick)}
        height={height >= SMALLEST_HEIGHT ? height : SMALLEST_HEIGHT}
        tabIndex={tabIndex}
        role="link"
        aria-labelledby={this.cardID}
      >
        <LazyImage
          original={{
            webp: ` ${BASE_URL}/photos/385x320/${image}.webp`,
            jpg: `${BASE_URL}/photos/385x320/${image}.jpg`,
          }}
          placeholder={{
            webp: ` ${BASE_URL}/photos/30x30/${image}.webp`,
            jpg: `${BASE_URL}/photos/30x30/${image}.jpg`,
          }} // Add that to images kiwi
          name={destinationCity}
        />
        <StyledOverlay />
        <StyledOverlayHover />
        <StyledDestinationCardContent hiddenContentHeight={hiddenContentHeight}>
          <StyledDestinationCardHeader id={this.cardID}>
            <Shown>
              <Stack flex align="center" justify="start" spacing="extraTight">
                <Heading type="title3" element="div" inverted>
                  {departureCity}
                </Heading>
                <ArrowUp customColor="#fff" size="small" />
              </Stack>
            </Shown>
            <StyledDestination>
              <Heading type="title1" element="div" inverted>
                {destinationCity}
              </Heading>
            </StyledDestination>
            <Shown>
              <Heading type="title4" element="div" inverted>
                {destinationCountry}
              </Heading>
            </Shown>
          </StyledDestinationCardHeader>
          <Stack flex justify="between" spaceAfter="small" align="end">
            <Heading type="title3" element="div" inverted>
              {price}
            </Heading>
            {timeOfStay && (
              <Heading type="title4" element="div" inverted>
                {timeOfStay}
              </Heading>
            )}
          </Stack>
          <StyledDestinationCardHiddenContent ref={this.hiddenContent}>
            <Stack direction="row" justify="between">
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
              <Stack direction="row" justify="between">
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
