// @flow
import * as React from "react";
import styled, { css } from "styled-components";

import { useWidth } from "../../context";
import defaultTheme from "../../../defaultTheme";
import Stack from "../../../Stack";
import Text from "../../../Text";
import ItineraryIcon from "../ItineraryIcon";

import type { Props } from ".";

const StyledWrapper = styled.div`
  ${({ theme, $hidden }) => css`
    display: flex;
    position: relative;
    box-sizing: border-box;
    opacity: ${$hidden ? `0.8` : `1`};
    padding: 0 ${theme.orbit.spaceSmall};
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

const ItinerarySegmentStop = ({
  date,
  icon,
  time,
  city,
  station,
  hidden,
  canceled,
  minWidth = 70,
  type,
}: Props): React.Node => {
  const { calculatedWidth, setWidths } = useWidth();
  const [dateWidth, setDateWidth] = React.useState<HTMLDivElement | null>(null);

  React.useLayoutEffect(() => {
    setWidths(prev => (dateWidth?.clientWidth ? [...prev, minWidth, dateWidth.clientWidth] : prev));
  }, [setWidths, dateWidth]);

  return (
    <StyledWrapper $hidden={hidden}>
      <Stack flex align="center" spacing="small">
        <StyledDate minWidth={calculatedWidth} ref={setDateWidth}>
          <Stack flex direction="column" spacing="none" align="end">
            <Text strikeThrough={canceled} weight="medium" type={canceled ? "critical" : "primary"}>
              {time}
            </Text>
            <Text type="secondary" size="small" align="right">
              {date}
            </Text>
          </Stack>
        </StyledDate>
        <ItineraryIcon type={type}>{icon}</ItineraryIcon>
        <Stack spacing="none">
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
