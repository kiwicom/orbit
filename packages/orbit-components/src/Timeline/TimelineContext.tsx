import * as React from "react";

import type { Type } from "./TimelineStep/types";

type Statuses = Record<string, Type>;

interface Context {
  types: Statuses;
  isColumnOnDesktop: boolean;
  setTypes: React.Dispatch<React.SetStateAction<Statuses>>;
}

interface StepContext {
  index: number;
  last: boolean;
  hasSubLabelMargin?: boolean;
}

export const TimelineStatusContext = React.createContext<Context>({
  types: {},
  isColumnOnDesktop: false,
  setTypes: () => {},
});

export const TimelineStepContext = React.createContext<StepContext>({
  index: 0,
  last: false,
  hasSubLabelMargin: false,
});

export const TimelineStatusProvider = ({ children, direction }) => {
  const [types, setTypes] = React.useState({});

  const value = React.useMemo(
    () => ({ types, setTypes, isColumnOnDesktop: direction === "column" }),
    [types, setTypes, direction],
  );

  return <TimelineStatusContext.Provider value={value}>{children}</TimelineStatusContext.Provider>;
};

export const TimelineStepProvider = ({ children, index, last, hasSubLabelMargin }) => {
  const value = React.useMemo(
    () => ({ index, last, hasSubLabelMargin }),
    [index, last, hasSubLabelMargin],
  );
  return <TimelineStepContext.Provider value={value}>{children}</TimelineStepContext.Provider>;
};

export const useStep = () => React.useContext(TimelineStepContext);
export const useStatuses = () => React.useContext(TimelineStatusContext);
