// @flow
import * as React from "react";

import type { Context } from "./CardContext";

export const cardDefault: Context = {
  onToggle: () => {},
  setExpandedSections: () => {},
  roundedBorders: {
    top: false,
    bottom: false,
  },
  index: 0,
  noBorderTop: false,
};

const context: React.Context<Context> = React.createContext(cardDefault);

export const useCard = () => React.useContext(context);

export const { Consumer, Provider } = context;
