// @flow
import { createContext } from "react";

import type { CardSectionContextType } from "./CardSectionContext";

const CardSectionContext: CardSectionContextType = createContext({
  expandable: false,
  expanded: false,
  handleToggleSection: () => {},
  onKeyDownHandler: () => {},
});

export default CardSectionContext;
