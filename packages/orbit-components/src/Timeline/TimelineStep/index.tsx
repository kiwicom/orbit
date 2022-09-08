import * as React from "react";

import CheckCircle from "../../icons/CheckCircle";
import Circle from "../../icons/CircleEmpty";
import AlertCircle from "../../icons/AlertCircle";
import CloseCircle from "../../icons/CloseCircle";
import { useStatuses, useStep } from "../TimelineContext";
import useMediaQuery from "../../hooks/useMediaQuery";
import TimelineStepDesktop from "./components/TimelineStepDesktop";
import TimelineStepMobile from "./components/TimelineStepMobile";
import { Props } from "./types";
import { Type } from "./consts";

const TypeIcon = ({ type }) => {
  if (type === Type.Success) return <CheckCircle color="success" />;
  if (type === Type.Warning) return <AlertCircle color="warning" />;
  if (type === Type.Critical) return <CloseCircle color="critical" />;

  return <Circle color="tertiary" size="small" />;
};

const TimelineStep = ({ children, label, subLabel, type, asText }: Props) => {
  const { types, setTypes, isColumnOnDesktop } = useStatuses();
  const { index, last } = useStep();
  const { isDesktop } = useMediaQuery();

  const nextType = types[index + 1];

  React.useEffect(() => {
    setTypes(prev => ({ ...prev, [index]: type }));
  }, [setTypes, type, index]);

  if (isColumnOnDesktop)
    return (
      <TimelineStepMobile
        typeIcon={<TypeIcon type={type} />}
        nextType={nextType}
        label={label}
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
        typeIcon={<TypeIcon type={type} />}
        nextType={nextType}
        label={label}
        asText={asText}
        type={type}
        subLabel={subLabel}
        last={last}
      >
        {children}
      </TimelineStepDesktop>
    );

  return (
    <TimelineStepMobile
      typeIcon={<TypeIcon type={type} />}
      nextType={nextType}
      label={label}
      asText={asText}
      type={type}
      subLabel={subLabel}
      last={last}
    >
      {children}
    </TimelineStepMobile>
  );
};

export default TimelineStep;
