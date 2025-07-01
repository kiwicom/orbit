import React from "react";

import type * as Common from "../common/types";

interface Context {
  readonly onExpand?: Common.Callback;
  readonly expanded: boolean;
  readonly loading?: boolean;
  readonly loadingTitle?: string;
  readonly loadingHidden?: boolean;
}

export const accordionDefault: Context = {
  onExpand: () => {},
  expanded: false,
  loading: false,
};

const context = React.createContext<Context>(accordionDefault);
context.displayName = "AccordionOrbitContext";

export const useAccordion = (): Context => React.useContext(context);

export const { Consumer, Provider } = context;
