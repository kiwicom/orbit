import * as React from "react";

import CheckCircle from "../../../icons/CheckCircle";
import Circle from "../../../icons/CircleEmpty";
import AlertCircle from "../../../icons/AlertCircle";
import CloseCircle from "../../../icons/CloseCircle";
import StyledIconWrapper from "../primitives/StyledIconWrapper";
import { Type } from "../types";

const getTypeIcon = ({ type, active }: { type?: Type; active: boolean }) => {
  if (type === "success" && active)
    return (
      <svg height="16" width="16" viewBox="0 0 16 16">
        <circle fill="none" stroke="green" strokeWidth="1px" cx="8" cy="8" r="6" />
        <circle fill="green" stroke="none" cx="8" cy="8" r="3">
          <animate
            attributeName="opacity"
            dur="2.5s"
            values="0;1;0"
            repeatCount="indefinite"
            begin="0.1"
          />
        </circle>
      </svg>
    );

  if (type === "success") return <CheckCircle color="success" size="small" />;
  if (type === "warning") return <AlertCircle color="warning" size="small" />;
  if (type === "critical") return <CloseCircle color="critical" size="small" />;

  return <Circle color="tertiary" size="small" />;
};

const TypeIcon = ({ type, active, mobile }: { type?: Type; active: boolean; mobile?: boolean }) => {
  return (
    <StyledIconWrapper mobile={mobile} status={type} active={active}>
      {getTypeIcon({ type, active })}
    </StyledIconWrapper>
  );
};

export default TypeIcon;
