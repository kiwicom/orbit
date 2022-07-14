// @flow
import * as React from "react";
import styled from "styled-components";

import StyledRelative from "../primitives/StyledRelative";
import StyledIconWrapper from "../primitives/StyledIconWrapper";
import StyledProgressLine from "../primitives/StyledProgressLine";
import StyledText from "../primitives/StyledText";
import CustomBadge from "./CustomBadge";
import Badge from "../../../Badge";
import Text from "../../../Text";
import Stack from "../../../Stack";
import type { Props as StepProps, Type } from "..";

const StyledDescription = styled.div`
  max-width: 250px;
  width: 100%;
`;

const StyledAligned = styled.div`
  text-align: center;
`;

type Props = {|
  ...StepProps,
  last: boolean,
  typeIcon: React.Node,
  nextType: Type,
|};

const Label = ({ asText, type, label }) => {
  if (asText) {
    return (
      <Text type={type} weight="bold">
        {label}
      </Text>
    );
  }

  return !type ? (
    <CustomBadge>
      <StyledAligned>{label}</StyledAligned>
    </CustomBadge>
  ) : (
    <Badge type={type}>
      <StyledAligned>{label}</StyledAligned>
    </Badge>
  );
};

const TimelineStepDesktop = ({
  type,
  last,
  nextType,
  children,
  label,
  subLabel,
  asText,
  typeIcon,
}: Props): React.Node => {
  return (
    <Stack inline shrink direction="column" align="center" spaceAfter="large">
      {subLabel && (
        <StyledText>
          <Text size="small">{subLabel}</Text>
        </StyledText>
      )}
      <StyledRelative inner>
        <StyledProgressLine data-test="progressLine" desktop status={type} />
        <StyledIconWrapper>{typeIcon}</StyledIconWrapper>
        <StyledProgressLine data-test="progressLine" desktop status={nextType || (last && type)} />
      </StyledRelative>
      <Stack flex align="center" spacing="XSmall" direction="column">
        <Label asText={asText} type={type} label={label} />
        <StyledDescription>
          <Text align="center" type={type ? "primary" : "secondary"}>
            {children}
          </Text>
        </StyledDescription>
      </Stack>
    </Stack>
  );
};

export default TimelineStepDesktop;
