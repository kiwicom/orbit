// @flow
import * as React from "react";

import type { Context } from "./PricingTableContext";

const defaultContext: Context = {
  basis: 0,
  hasError: false,
  desktopRadio: false,
  isContent: false,
};

const PricingTableContext: React.Context<Context> = React.createContext(defaultContext);
PricingTableContext.displayName = "PricingTableOrbitContext";

export default PricingTableContext;
