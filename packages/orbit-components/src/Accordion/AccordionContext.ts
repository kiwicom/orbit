import React from "react";

import type * as Common from "../common/types";

interface Context {
  readonly onExpand?: Common.Callback;
  readonly expanded: boolean;
  readonly loading?: boolean;
}

export const accordionDefault: Context = {
  onExpand: () => {},
  expanded: false,
  loading: false,
};

const context: React.Context<Context> = React.createContext(accordionDefault);
context.displayName = "AccordionOrbitContext";

export const useAccordion = (): Context => React.useContext(context);

export const { Consumer, Provider } = context;
