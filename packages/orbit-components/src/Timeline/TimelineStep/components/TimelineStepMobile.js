// @flow
import * as React from "react";
import styled from "styled-components";

import StyledRelative from "../primitives/StyledRelative";
import defaultTheme from "../../../defaultTheme";
import CustomBadge from "./CustomBadge";
import Badge from "../../../Badge";
import Text from "../../../Text";
import Stack from "../../../Stack";
import StyledIconWrapper from "../primitives/StyledIconWrapper";
import StyledProgressLine from "../primitives/StyledProgressLine";
import StyledText from "../primitives/StyledText";
import type { Props as StepProps, Type } from "../index";

const StyledIndent = styled.div`
  padding-left: ${({ theme }) => theme.orbit.spaceXSmall};
`;

StyledIndent.defaultProps = {
  theme: defaultTheme,
};

type Props = {|
  ...StepProps,
  last: boolean,
  typeIcon: React.Node,
  nextType: Type,
|};

const TimelineStepMobile = ({
  type,
  subLabel,
  label,
  nextType,
  typeIcon,
  children,
  last,
}: Props) => {
  return (
    <StyledRelative>
      <Stack inline spaceAfter="large">
        {!last && <StyledProgressLine status={nextType} data-test="progressLine" />}
        <StyledIconWrapper mobile>{typeIcon}</StyledIconWrapper>
        <Stack flex shrink direction="column" spacing="condensed">
          <Stack inline spacing="condensed" align="center">
            {!type ? <CustomBadge>{label}</CustomBadge> : <Badge type={type}>{label}</Badge>}
            <StyledText>
              <Text size="small">{subLabel}</Text>
            </StyledText>
          </Stack>
          <StyledIndent>
            <Text type={type ? "primary" : "secondary"}>{children}</Text>
          </StyledIndent>
        </Stack>
      </Stack>
    </StyledRelative>
  );
};

export default TimelineStepMobile;
