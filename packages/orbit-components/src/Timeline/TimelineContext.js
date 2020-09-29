// @flow
import * as React from "react";

import type { StepContext, Context } from "./TimelineContext";

const initialState = {
  statuses: [],
};

export const TimelineStatusContext: React.Context<Context> = React.createContext({
  state: initialState,
  dispatch: () => null,
});

export const TimelineStepContext: React.Context<StepContext> = React.createContext({
  index: 0,
  last: false,
});

const reducer = (state, action) => {
  switch (action.type) {
    case "ADD_STATUS":
      return {
        statuses: [...state.statuses, action.payload],
      };

    default:
      return state;
  }
};

export const TimelineStatusProvider = ({ children }: { children: React.Node }) => {
  const [state, dispatch] = React.useReducer(reducer, initialState);

  return (
    <TimelineStatusContext.Provider value={{ state, dispatch }}>
      {children}
    </TimelineStatusContext.Provider>
  );
};

export const useStep = () => React.useContext(TimelineStepContext);
export const useStatuses = () => React.useContext(TimelineStatusContext);
