import * as React from "react";

import { useStatuses, useStep } from "../TimelineContext";
import useMediaQuery from "../../hooks/useMediaQuery";
import TimelineStepDesktop from "./components/TimelineStepDesktop";
import TimelineStepMobile from "./components/TimelineStepMobile";
import { Props } from "./types";

const getActiveState = ({
  active,
  last,
  type,
  nextType,
}: {
  active: Props["active"];
  last: boolean;
  type: Props["type"];
  nextType: Props["type"];
}) => {
  if (active == null) return type && !nextType;
  if (last && type === "success") return false;

  return active;
};

const TimelineStep = ({ children, label, subLabel, type, active }: Props) => {
  const { types, setTypes, isColumnOnDesktop } = useStatuses();
  const { index, last } = useStep();
  const { isDesktop } = useMediaQuery();

  const nextType = types[index + 1];
  const prevType = types[index - 1];
  const isActive = getActiveState({ active, last, type, nextType });

  React.useEffect(() => {
    setTypes(prev => ({ ...prev, [index]: type }));
  }, [setTypes, type, index]);

  if (isColumnOnDesktop)
    return (
      <TimelineStepMobile
        nextType={nextType}
        label={label}
        active={isActive}
        type={type}
        subLabel={subLabel}
        last={last}
      >
        {children}
      </TimelineStepMobile>
    );

  if (isDesktop)
    return (
      <TimelineStepDesktop
        nextType={nextType}
        prevType={prevType}
        label={label}
        last={last}
        active={isActive}
        type={type}
        subLabel={subLabel}
      >
        {children}
      </TimelineStepDesktop>
    );

  return (
    <TimelineStepMobile
      nextType={nextType}
      label={label}
      type={type}
      active={isActive}
      subLabel={subLabel}
      last={last}
    >
      {children}
    </TimelineStepMobile>
  );
};

export default TimelineStep;
