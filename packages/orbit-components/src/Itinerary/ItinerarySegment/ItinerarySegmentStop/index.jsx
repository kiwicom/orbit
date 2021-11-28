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
  minWidth = 60,
  type,
}: Props): React.Node => {
  const { calculatedWidth, setWidths } = useWidth();
  const dateRef = React.useRef<HTMLDivElement | null>(null);

  React.useEffect(() => {
    setWidths(prev => (dateRef.current ? [...prev, dateRef.current.clientWidth] : prev));
  }, [setWidths]);

  return (
    <StyledWrapper $hidden={hidden}>
      <Stack flex align="center" spacing="small">
        <StyledDate minWidth={calculatedWidth || minWidth} ref={dateRef}>
          <Stack flex direction="column" spacing="XXXSmall" align="end">
            <Text strikeThrough={canceled} weight="medium" type={canceled ? "critical" : "primary"}>
              {time}
            </Text>
            <Text type="secondary" size="small" align="right">
              {date}
            </Text>
          </Stack>
        </StyledDate>
        <ItineraryIcon type={type}>{icon}</ItineraryIcon>
        <Stack spacing="XXXSmall">
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
