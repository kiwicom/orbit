import * as React from "react";
import cx from "clsx";

import CheckCircle from "../../../icons/CheckCircle";
import Circle from "../../../icons/CircleEmpty";
import AlertCircle from "../../../icons/AlertCircle";
import CloseCircle from "../../../icons/CloseCircle";
import type { Type } from "../types";

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

const getBackgroundClassName = (type: Type): string => {
  const classNames = {
    success: "bg-green-normal",
    warning: "bg-orange-normal",
    critical: "bg-red-normal",
    info: "bg-blue-normal",
  };

  return classNames[type];
};

interface Props {
  type?: Type;
  active: boolean;
  mobile?: boolean;
}

const TypeIcon = ({ type, active, mobile }: Props) => {
  return (
    <div
      className={cx(
        "z-default h-icon-medium relative flex items-center justify-center",
        mobile && "min-w-lg",
      )}
    >
      {getTypeIcon({ type, active })}
      <div
        className={cx(
          "size-icon-medium absolute top-0 rounded-full opacity-10",
          mobile ? "left-xxxs" : "-left-xxxs",
          type && getBackgroundClassName(type),
          active && "animate-[pulse-zero_2.5s_ease-in-out_infinite]",
        )}
      />
    </div>
  );
};

export default TypeIcon;
