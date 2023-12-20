import * as React from "react";
import styled, { css } from "styled-components";

import StyledRelative from "../primitives/StyledRelative";
import TypeIcon from "./TypeIcon";
import StyledProgressLine from "../primitives/StyledProgressLine";
import StyledText from "../primitives/StyledText";
import Text from "../../../Text";
import Stack from "../../../Stack";
import defaultTheme from "../../../defaultTheme";
import type { Props as StepProps, Type } from "../types";
import useTheme from "../../../hooks/useTheme";

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
  hasSubLabelMargin?: boolean;
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
  hasSubLabelMargin,
}: Props) => {
  const theme = useTheme();

  return (
    <Stack inline shrink direction="column" align="center">
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
        {subLabel && (
          <StyledText>
            <Text align="center" size="small">
              {subLabel}
            </Text>
          </StyledText>
        )}
        <StyledText active={active || (last && type === "success")}>
          <Text
            align="center"
            weight="bold"
            margin={{ top: !subLabel && hasSubLabelMargin ? theme.orbit.spaceLarge : 0 }}
          >
            {label}
          </Text>
        </StyledText>
        {children && (
          <StyledDescription active={active || (last && type === "success")}>
            <Text align="center">{children}</Text>
          </StyledDescription>
        )}
      </Stack>
    </Stack>
  );
};

export default TimelineStepDesktop;
