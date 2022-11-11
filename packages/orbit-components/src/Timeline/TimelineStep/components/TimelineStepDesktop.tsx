import * as React from "react";
import styled, { css } from "styled-components";

import StyledRelative from "../primitives/StyledRelative";
import TypeIcon from "./TypeIcon";
import StyledProgressLine from "../primitives/StyledProgressLine";
import StyledText from "../primitives/StyledText";
import Text from "../../../Text";
import Stack from "../../../Stack";
import defaultTheme from "../../../defaultTheme";
import { Props as StepProps, Type } from "../types";

const StyledDescription = styled.div<{ active?: boolean }>`
  ${({ theme, active }) => css`
    max-width: 250px;
    width: 100%;
    > p {
      color: ${active ? theme.orbit.paletteInkDark : theme.orbit.paletteInkLight};
    }
  `}
`;

StyledDescription.defaultProps = {
  theme: defaultTheme,
};

interface Props extends StepProps {
  last: boolean;
  prevType: Type;
  nextType: Type;
}

const TimelineStepDesktop = ({
  type,
  nextType,
  prevType,
  last,
  children,
  active,
  label,
  subLabel,
}: Props) => {
  return (
    <Stack inline shrink direction="column" align="center" spaceAfter="large">
      {subLabel && (
        <StyledText>
          <Text size="small">{subLabel}</Text>
        </StyledText>
      )}
      <StyledRelative inner>
        <StyledProgressLine desktop status={type} prevStatus={prevType} nextStatus={nextType} />
        <TypeIcon type={type} active={!!active} />
        <StyledProgressLine
          desktop
          status={!nextType && !last ? undefined : type}
          prevStatus={prevType}
          nextStatus={nextType}
          last={last}
        />
      </StyledRelative>
      <Stack flex align="center" spacing="XSmall" direction="column">
        <StyledText active={active || (last && type === "success")}>
          <Text weight="bold">{label}</Text>
        </StyledText>
        <StyledDescription active={active || (last && type === "success")}>
          <Text align="center">{children}</Text>
        </StyledDescription>
      </Stack>
    </Stack>
  );
};

export default TimelineStepDesktop;
