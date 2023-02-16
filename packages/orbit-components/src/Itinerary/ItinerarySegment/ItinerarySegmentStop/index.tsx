import * as React from "react";
import styled, { css } from "styled-components";

import { useWidth } from "../../context";
import defaultTheme from "../../../defaultTheme";
import Stack from "../../../Stack";
// TODO: remove after designers will resolve status colors
// https://skypicker.slack.com/archives/GSGN9BN6Q/p1674568716519889
import Text from "../../ItineraryTemporaryText";
import ItineraryIcon from "../ItineraryIcon";
import { usePart } from "../context";
import type { Props } from "./types";

const StyledWrapper = styled.div<{ isLast?: boolean; isFirst?: boolean; isBanner?: boolean }>`
  ${({ theme, isLast, isFirst, isBanner }) => css`
    display: flex;
    position: relative;
    box-sizing: border-box;
    padding: 0 ${theme.orbit.spaceSmall};
    margin-bottom: ${((!isLast && !isFirst) || (!isFirst && isBanner)) && theme.orbit.spaceSmall};
  `}
`;

StyledWrapper.defaultProps = {
  theme: defaultTheme,
};

const StyledDate = styled.div<{ minWidth?: number }>`
  ${({ minWidth }) => css`
    white-space: nowrap;
    min-width: ${minWidth}px;
  `}
`;

const StyledHiddenCity = styled.p`
  ${({ theme }) => css`
    margin: 0;
    font-family: ${theme.orbit.fontFamily};
    font-weight: ${theme.orbit.fontWeightBold};
    font-size: ${theme.orbit.fontSizeTextSmall};
    color: ${theme.orbit.paletteOrangeNormal};
  `};
`;

StyledHiddenCity.defaultProps = {
  theme: defaultTheme,
};

const ItinerarySegmentStop = ({
  date,
  time,
  cancelledDate,
  cancelledCity,
  cancelledStation,
  cancelledTime,
  city,
  icon,
  station,
  hidden,
  hiddenCityText = "Hidden city",
  minWidth = 70,
  type,
}: Props) => {
  const { calculatedWidth, setWidths } = useWidth();
  const { last, isBanner, index } = usePart();
  const [dateWidth, setDateWidth] = React.useState<HTMLDivElement | null>(null);

  const textType = type === "neutral" ? "primary" : type;

  React.useEffect(() => {
    setWidths(prev => (dateWidth?.clientWidth ? [...prev, minWidth, dateWidth.clientWidth] : prev));
  }, [setWidths, dateWidth, minWidth]);

  return (
    <StyledWrapper isLast={last} isFirst={index === 0} isBanner={isBanner}>
      <Stack flex align="center" spacing="small">
        <StyledDate minWidth={calculatedWidth} ref={setDateWidth} data-test="time">
          <Stack flex direction="column" spacing="none" align="end">
            {time && (
              <Text
                weight="medium"
                as="div"
                type={cancelledTime ? textType : "primary"}
                withBackground={!!cancelledTime}
              >
                {time}
              </Text>
            )}
            {date && (
              <Text
                type={cancelledDate ? textType : "secondary"}
                size="small"
                align="right"
                as="div"
                withBackground={!!cancelledDate}
              >
                {date}
              </Text>
            )}
            {cancelledTime && (
              <Text type="secondary" weight="medium" strikeThrough as="div">
                {cancelledTime}
              </Text>
            )}
            {cancelledDate && (
              <Text type="secondary" size="small" align="right" strikeThrough as="div">
                {cancelledDate}
              </Text>
            )}
          </Stack>
        </StyledDate>
        <ItineraryIcon type={type}>{icon}</ItineraryIcon>
        <Stack direction="column" shrink spacing="none">
          {hidden && hiddenCityText && <StyledHiddenCity>{hiddenCityText}</StyledHiddenCity>}
          <Text
            as="div"
            weight="medium"
            withBackground={!!cancelledCity}
            type={cancelledCity ? textType : "primary"}
          >
            {city}
          </Text>
          <Text
            as="div"
            size="small"
            type={cancelledStation ? textType : "secondary"}
            withBackground={!!cancelledStation}
          >
            {station}
          </Text>
          {cancelledCity && (
            <Text weight="medium" strikeThrough as="div">
              {cancelledCity}
            </Text>
          )}
          {cancelledStation && (
            <Text type="secondary" size="small" strikeThrough as="div">
              {cancelledStation}
            </Text>
          )}
        </Stack>
      </Stack>
    </StyledWrapper>
  );
};

export default ItinerarySegmentStop;
