import * as React from "react";

const defaultContext = {
  basis: "0",
  hasError: false,
  desktopRadio: false,
  isContent: false,
};

const PricingTableContext = React.createContext(defaultContext);
PricingTableContext.displayName = "PricingTableOrbitContext";

export default PricingTableContext;
