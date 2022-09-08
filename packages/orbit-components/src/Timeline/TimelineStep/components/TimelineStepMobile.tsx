import * as React from "react";
import styled, { css } from "styled-components";

import StyledRelative from "../primitives/StyledRelative";
import defaultTheme from "../../../defaultTheme";
import CustomBadge from "./CustomBadge";
import Badge from "../../../Badge";
import Text from "../../../Text";
import Stack from "../../../Stack";
import StyledIconWrapper from "../primitives/StyledIconWrapper";
import StyledProgressLine from "../primitives/StyledProgressLine";
import StyledText from "../primitives/StyledText";
import { Props as StepProps, Type } from "../types";

const StyledIndent = styled.div<{ isText?: boolean }>`
  padding-left: ${({ theme, isText }) => !isText && theme.orbit.spaceXSmall};
`;

StyledIndent.defaultProps = {
  theme: defaultTheme,
};

interface Props extends StepProps {
  last: boolean;
  typeIcon: React.ReactNode;
  nextType: Type;
}

const Label = ({ asText, type, label }) => {
  if (asText) {
    return (
      <div
        // @ts-expect-error TODO
        css={css`
          padding-top: 2px;
        `}
      >
        <Text type={type} weight="medium">
          {label}
        </Text>
      </div>
    );
  }

  return !type ? <CustomBadge>{label}</CustomBadge> : <Badge type={type}>{label}</Badge>;
};

const TimelineStepMobile = ({
  type,
  subLabel,
  label,
  nextType,
  typeIcon,
  asText,
  children,
  last,
}: Props) => {
  return (
    <StyledRelative>
      <Stack flex spaceAfter="large" align="stretch" desktop={{ align: "start" }}>
        <StyledIconWrapper mobile>{typeIcon}</StyledIconWrapper>
        {!last && <StyledProgressLine status={nextType} data-test="progressLine" />}
        <Stack flex shrink direction="column" spacing="XXSmall">
          <Stack
            flex
            direction={asText ? "column" : "row"}
            align={asText ? "start" : "center"}
            spacing="XXSmall"
          >
            <Label label={label} asText={asText} type={type} />
            {subLabel && (
              <StyledText>
                <Text size="small">{subLabel}</Text>
              </StyledText>
            )}
          </Stack>
          <StyledIndent isText={asText}>
            <Text type={type ? "primary" : "secondary"}>{children}</Text>
          </StyledIndent>
        </Stack>
      </Stack>
    </StyledRelative>
  );
};

export default TimelineStepMobile;
