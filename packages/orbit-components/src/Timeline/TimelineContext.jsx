// @flow
import * as React from "react";

import type { StepContext, Context } from "./TimelineContext";
import { TimelineStatusProvider as TimelineStatusProviderType } from "./TimelineContext";

export const TimelineStatusContext: React.Context<Context> = React.createContext({
  types: {},
  isColumnOnDesktop: false,
  setTypes: () => {},
});

export const TimelineStepContext: React.Context<StepContext> = React.createContext({
  index: 0,
  last: false,
});

export const TimelineStatusProvider: typeof TimelineStatusProviderType = ({
  children,
  direction,
}): React.Node => {
  const [types, setTypes] = React.useState({});

  return (
    <TimelineStatusContext.Provider
      value={{ types, setTypes, isColumnOnDesktop: direction === "column" }}
    >
      {children}
    </TimelineStatusContext.Provider>
  );
};

export const useStep = (): StepContext => React.useContext(TimelineStepContext);
export const useStatuses = (): Context => React.useContext(TimelineStatusContext);
