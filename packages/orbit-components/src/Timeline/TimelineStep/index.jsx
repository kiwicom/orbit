// @flow
import * as React from "react";

import { useStatuses, useStep } from "../TimelineContext";
import useMediaQuery from "../../hooks/useMediaQuery";
import TimelineStepDesktop from "./components/TimelineStepDesktop";
import TimelineStepMobile from "./components/TimelineStepMobile";

import type { Props } from ".";

const getActiveState = (active, isLast, type, nextType) => {
  if (active == null) return type && !nextType;
  if (isLast && type === "success") return false;

  return active;
};

const TimelineStep = ({ children, label, subLabel, type, active }: Props): React.Node => {
  const { types, setTypes, isColumnOnDesktop } = useStatuses();
  const { index, last } = useStep();
  const { isDesktop } = useMediaQuery();

  const nextType = types[index + 1];
  const prevType = types[index - 1];
  const isActive = getActiveState(active, last, type, nextType);

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
