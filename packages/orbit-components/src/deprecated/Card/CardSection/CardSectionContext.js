// @flow
import * as React from "react";

import type { CardSectionContextType } from "./CardSectionContext";

const CardSectionContext: CardSectionContextType = React.createContext({
  expandable: false,
  expanded: false,
  handleToggleSection: () => {},
  onKeyDownHandler: () => {},
});
CardSectionContext.displayName = "CardDeprecatedOrbitContext";

export default CardSectionContext;
