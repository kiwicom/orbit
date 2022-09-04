import * as React from "react";

import { Type } from "./TimelineStep/index.d";

type Statuses = Record<string, Type>;

interface Context {
  types: Statuses;
  isColumnOnDesktop: boolean;
  setTypes: React.Dispatch<React.SetStateAction<Statuses>>;
}

interface StepContext {
  index: number;
  last: boolean;
}

export const TimelineStatusContext = React.createContext<Context>({
  types: {},
  isColumnOnDesktop: false,
  setTypes: () => {},
});

export const TimelineStepContext = React.createContext<StepContext>({
  index: 0,
  last: false,
});

export const TimelineStatusProvider = ({ children, direction }) => {
  const [types, setTypes] = React.useState({});

  return (
    <TimelineStatusContext.Provider
      value={{ types, setTypes, isColumnOnDesktop: direction === "column" }}
    >
      {children}
    </TimelineStatusContext.Provider>
  );
};

export const useStep = () => React.useContext(TimelineStepContext);
export const useStatuses = () => React.useContext(TimelineStatusContext);
