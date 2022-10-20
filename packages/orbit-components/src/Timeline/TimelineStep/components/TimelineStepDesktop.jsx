// @flow
import * as React from "react";
import styled, { css } from "styled-components";

import StyledRelative from "../primitives/StyledRelative";
import TypeIcon from "./TypeIcon";
import StyledProgressLine from "../primitives/StyledProgressLine";
import StyledText from "../primitives/StyledText";
import Text from "../../../Text";
import Stack from "../../../Stack";
import type { Props as StepProps, Type } from "..";
import defaultTheme from "../../../defaultTheme";

const StyledDescription = styled.div`
  ${({ theme, active }) => css`
    max-width: 250px;
    width: 100%;
    > p {
      color: ${active ? theme.orbit.paletteInkDark : theme.orbit.paletteInkLight};
    }
  `}
`;

// $FlowFixMe: https://github.com/flow-typed/flow-typed/issues/3653#issuecomment-568539198
StyledDescription.defaultProps = {
  theme: defaultTheme,
};

type Props = {|
  ...StepProps,
  prevType: Type,
  last: boolean,
  nextType: Type,
|};

const TimelineStepDesktop = ({
  type,
  nextType,
  prevType,
  last,
  children,
  label,
  subLabel,
}: Props): React.Node => {
  const active = type && !nextType;

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
        <StyledText active={active}>
          <Text weight="bold">{label}</Text>
        </StyledText>
        <StyledDescription active={active}>
          <Text align="center">{children}</Text>
        </StyledDescription>
      </Stack>
    </Stack>
  );
};

export default TimelineStepDesktop;
