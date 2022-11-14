import * as React from "react";
import styled, { css } from "styled-components";

import StarFull from "../../../icons/StarFull";
import CircleEmpty from "../../../icons/CircleSmallEmpty";
import Circle from "../../../icons/CircleSmall";
import { useWidth } from "../../context";
import defaultTheme from "../../../defaultTheme";
import Stack from "../../../Stack";
import Text from "../../../Text";
import ItineraryIcon from "../ItineraryIcon";
import { usePart } from "../context";
import { Props } from "./types";

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

const ItinerarySegmentStopIcon = ({
  isPrevHidden,
  isLast,
  isHidden,
  icon,
}: {
  isHidden?: boolean;
  isPrevHidden: boolean;
  isLast: boolean;
  icon?: React.ReactNode;
}): JSX.Element => {
  if (icon) return <>{icon}</>;
  if (isHidden) return <StarFull color="warning" size="small" />;
  if (isPrevHidden && isLast) return <CircleEmpty size="small" color="tertiary" />;

  return <Circle size="small" color="secondary" />;
};

const ItinerarySegmentStop = ({
  date,
  icon,
  time,
  cancelledDate,
  cancelledCity,
  cancelledStation,
  cancelledTime,
  city,
  station,
  hidden,
  hiddenCityText = "Hidden city",
  minWidth = 70,
  type,
}: Props) => {
  const { calculatedWidth, setWidths } = useWidth();
  const { isPrevHidden, last, isBanner, index } = usePart();
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
                withBackground={!!cancelledDate}
              >
                {date}
              </Text>
            )}
            {cancelledTime && (
              <Text type="secondary" weight="medium" strikeThrough>
                {cancelledTime}
              </Text>
            )}
            {cancelledDate && (
              <Text type="secondary" size="small" align="right" strikeThrough>
                {cancelledDate}
              </Text>
            )}
          </Stack>
        </StyledDate>
        <ItineraryIcon type={type}>
          <ItinerarySegmentStopIcon
            isLast={last}
            isHidden={hidden}
            isPrevHidden={isPrevHidden}
            icon={icon}
          />
        </ItineraryIcon>
        <Stack direction="column" shrink spacing="none">
          {hidden && hiddenCityText && <StyledHiddenCity>{hiddenCityText}</StyledHiddenCity>}
          <Text
            weight="medium"
            withBackground={!!cancelledCity}
            type={cancelledCity ? textType : "primary"}
          >
            {city}
          </Text>
          <Text
            size="small"
            type={cancelledStation ? textType : "secondary"}
            withBackground={!!cancelledStation}
          >
            {station}
          </Text>
          {cancelledCity && (
            <Text weight="medium" strikeThrough>
              {cancelledCity}
            </Text>
          )}
          {cancelledStation && (
            <Text type="secondary" size="small" strikeThrough>
              {cancelledStation}
            </Text>
          )}
        </Stack>
      </Stack>
    </StyledWrapper>
  );
};

export default ItinerarySegmentStop;
export { Props };
