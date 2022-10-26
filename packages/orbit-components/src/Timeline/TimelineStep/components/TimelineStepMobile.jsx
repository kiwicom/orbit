// @flow
import * as React from "react";

import StyledRelative from "../primitives/StyledRelative";
import Text from "../../../Text";
import Stack from "../../../Stack";
import StyledProgressLine from "../primitives/StyledProgressLine";
import TypeIcon from "./TypeIcon";
import StyledText from "../primitives/StyledText";
import type { Props as StepProps, Type } from "..";

type Props = {|
  ...StepProps,
  last: boolean,
  nextType: Type,
|};

const TimelineStepMobile = ({
  type,
  subLabel,
  label,
  nextType,
  children,
  active,
  last,
}: Props): React.Node => {
  return (
    <StyledRelative>
      <Stack flex spaceAfter="large" align="stretch" desktop={{ align: "start" }}>
        <TypeIcon type={type} active={!!active} mobile />
        {!last && <StyledProgressLine status={nextType} prevStatus={type} />}
        <Stack flex shrink direction="column" spacing="XXSmall">
          <Stack flex direction="column" spacing="XXSmall">
            <StyledText active={active}>
              <Text weight="bold">{label}</Text>
            </StyledText>
            {subLabel && (
              <StyledText active={active}>
                <Text size="small">{subLabel}</Text>
              </StyledText>
            )}
          </Stack>
          <StyledText active={active}>
            <Text>{children}</Text>
          </StyledText>
        </Stack>
      </Stack>
    </StyledRelative>
  );
};

export default TimelineStepMobile;
