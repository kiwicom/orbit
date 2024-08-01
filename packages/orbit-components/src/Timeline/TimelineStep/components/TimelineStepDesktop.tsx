import * as React from "react";
import cx from "clsx";

import TypeIcon from "./TypeIcon";
import ProgressLine from "./ProgressLine";
import TextWrapper from "./TextWrapper";
import Text from "../../../Text";
import Stack from "../../../Stack";
import type { Props as StepProps, Type } from "../types";
import useTheme from "../../../hooks/useTheme";

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
      <div className={cx("relative flex w-[calc(100%+theme(spacing.400))] items-center")}>
        <ProgressLine desktop status={type} prevStatus={prevType} nextStatus={nextType} />
        <TypeIcon type={type} active={!!active} />
        <ProgressLine
          desktop
          status={!nextType && !last ? undefined : type}
          prevStatus={prevType}
          nextStatus={nextType}
          last={last}
        />
      </div>
      <Stack flex align="center" spacing="200" direction="column">
        {subLabel && (
          <TextWrapper>
            <Text align="center" size="small">
              {subLabel}
            </Text>
          </TextWrapper>
        )}
        <TextWrapper active={active || (last && type === "success")}>
          <Text
            align="center"
            weight="bold"
            margin={{ top: !subLabel && hasSubLabelMargin ? theme.orbit.space600 : 0 }}
          >
            {label}
          </Text>
        </TextWrapper>
        {children && (
          <div
            className={cx(
              "w-full max-w-[250px]",
              active || (last && type === "success")
                ? "[&>p]:text-ink-dark"
                : "[&>p]:text-ink-light",
            )}
          >
            <Text align="center">{children}</Text>
          </div>
        )}
      </Stack>
    </Stack>
  );
};

export default TimelineStepDesktop;
