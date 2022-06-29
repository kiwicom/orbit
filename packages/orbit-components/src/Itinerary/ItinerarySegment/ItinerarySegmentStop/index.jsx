// @flow
import * as React from "react";
import styled, { css } from "styled-components";

import { StarFull, CircleEmpty, Circle } from "../../../icons";
import { useWidth } from "../../context";
import defaultTheme from "../../../defaultTheme";
import Stack from "../../../Stack";
import Text from "../../../Text";
import ItineraryIcon from "../ItineraryIcon";
import { usePart } from "../context";

import type { Props } from ".";

const StyledWrapper = styled.div`
  ${({ theme, $hidden, isLast, isFirst, isBanner }) => css`
    display: flex;
    position: relative;
    box-sizing: border-box;
    opacity: ${$hidden ? `0.8` : `1`};
    padding: 0 ${theme.orbit.spaceSmall};
    margin-bottom: ${((!isLast && !isFirst) || (!isFirst && isBanner)) && theme.orbit.spaceSmall};
  `}
`;

// $FlowFixMe: https://github.com/flow-typed/flow-typed/issues/3653#issuecomment-568539198
StyledWrapper.defaultProps = {
  theme: defaultTheme,
};

const StyledDate = styled.div`
  ${({ minWidth }) => css`
    white-space: nowrap;
    min-width: ${minWidth}px;
  `}
`;

const ItinerarySegmentStopIcon = ({
  isPrevHidden,
  isLast,
  isHidden,
  icon,
}: {|
  isHidden?: boolean,
  isPrevHidden: boolean,
  isLast: boolean,
  icon?: React.Node,
|}) => {
  if (icon) return icon;
  if (isHidden) return <StarFull color="warning" size="small" />;
  if (isPrevHidden && isLast) return <CircleEmpty size="small" color="secondary" />;

  return <Circle size="small" color="secondary" />;
};

const ItinerarySegmentStop = ({
  date,
  icon,
  time,
  cancelledTime,
  city,
  station,
  hidden,
  hiddenCityText = "Hidden city",
  minWidth = 70,
  type,
}: Props): React.Node => {
  const { calculatedWidth, setWidths } = useWidth();
  const { isPrevHidden, last, isBanner, index } = usePart();
  const [dateWidth, setDateWidth] = React.useState<HTMLDivElement | null>(null);

  React.useEffect(() => {
    setWidths(prev => (dateWidth?.clientWidth ? [...prev, minWidth, dateWidth.clientWidth] : prev));
  }, [setWidths, dateWidth, minWidth]);

  return (
    <StyledWrapper $hidden={hidden} isLast={last} isFirst={index === 0} isBanner={isBanner}>
      <Stack flex align="center" spacing="small">
        <StyledDate minWidth={calculatedWidth} ref={setDateWidth} data-test="time">
          <Stack flex direction="column" spacing="none" align="end">
            {time && (
              <Text weight="medium" type={type} withBackground={!!cancelledTime}>
                {time}
              </Text>
            )}
            {date && (
              <Text type="secondary" size="small" align="right">
                {date}
              </Text>
            )}
            {cancelledTime && (
              <Text type="secondary" weight="medium" strikeThrough={!!cancelledTime}>
                {cancelledTime}
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
        <Stack spacing="none">
          {hidden && hiddenCityText && (
            <Text type="warning" weight="bold" size="small">
              {hiddenCityText}
            </Text>
          )}
          <Text weight="medium">{city}</Text>
          <Text type="secondary" size="small">
            {station}
          </Text>
        </Stack>
      </Stack>
    </StyledWrapper>
  );
};

export default ItinerarySegmentStop;
