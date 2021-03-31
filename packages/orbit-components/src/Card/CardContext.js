// @flow
import * as React from "react";

import type { Context } from "./CardContext";

export const cardDefault: Context = {
  setExpandedSections: () => {},
  addSection: () => {},
  isOpened: false,
  removeSection: () => {},
  roundedBorders: {
    top: false,
    bottom: false,
  },
  index: 0,
  noBorderTop: false,
};

const context: React.Context<Context> = React.createContext(cardDefault);
context.displayName = "CardOrbitContext";

export const useCard = (): Context => React.useContext(context);

export const { Consumer, Provider } = context;
