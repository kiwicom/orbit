import * as React from "react";

import Text from "../../../Text";
import Stack from "../../../Stack";
import ProgressLine from "./ProgressLine";
import TypeIcon from "./TypeIcon";
import TextWrapper from "./TextWrapper";
import type { Props as StepProps, Type } from "../types";

interface Props extends StepProps {
  last: boolean;
  nextType: Type;
  direction?: "column" | "row";
}

const TimelineStepMobile = ({
  type,
  subLabel,
  label,
  nextType,
  children,
  active,
  last,
  direction,
}: Props) => {
  return (
    <li className="relative">
      <Stack
        flex
        spaceAfter={last ? undefined : "large"}
        align="stretch"
        desktop={{ align: "start" }}
      >
        <TypeIcon type={type} active={!!active} mobile />
        {(!last || direction === "row") && (
          <ProgressLine status={last ? type : nextType} prevStatus={type} />
        )}
        <Stack flex shrink direction="column" spacing="100">
          <Stack flex direction="column" spacing="100">
            <TextWrapper active={active || (last && type === "success")}>
              <Text weight="bold">{label}</Text>
            </TextWrapper>
            {subLabel && (
              <TextWrapper active={active}>
                <Text size="small">{subLabel}</Text>
              </TextWrapper>
            )}
          </Stack>
          {children && (
            <TextWrapper active={active || (last && type === "success")}>
              <Text>{children}</Text>
            </TextWrapper>
          )}
        </Stack>
      </Stack>
    </li>
  );
};

export default TimelineStepMobile;
