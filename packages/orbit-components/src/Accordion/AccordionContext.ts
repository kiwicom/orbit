import React from "react";

import type { Context } from "./AccordionContext.d";

export const accordionDefault: Context = {
  onExpand: () => {},
  expanded: false,
  loading: false,
};

const context: React.Context<Context> = React.createContext(accordionDefault);
context.displayName = "AccordionOrbitContext";

export const useAccordion = (): Context => React.useContext(context);

export const { Consumer, Provider } = context;
