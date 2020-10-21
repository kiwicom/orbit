// @flow
import * as React from "react";

import type { StepContext, Context } from "./TimelineContext";

export const TimelineStatusContext: React.Context<Context> = React.createContext({
  types: {},
  setTypes: () => {},
});

export const TimelineStepContext: React.Context<StepContext> = React.createContext({
  index: 0,
  last: false,
});

export const TimelineStatusProvider = ({ children }: {| children: React.Node |}) => {
  const [types, setTypes] = React.useState({});

  return (
    <TimelineStatusContext.Provider value={{ types, setTypes }}>
      {children}
    </TimelineStatusContext.Provider>
  );
};

export const useStep = () => React.useContext(TimelineStepContext);
export const useStatuses = () => React.useContext(TimelineStatusContext);
