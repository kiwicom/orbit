// @flow
import * as React from "react";

import type { WithModalContextType, ModalContextType } from "./ModalContext";

export const ModalContext: ModalContextType = React.createContext({
  setDimensions: () => {},
  decideFixedFooter: () => {},
  setHasModalSection: () => {},
  removeHasModalSection: () => {},
  hasModalSection: false,
  modalID: "",
});

export const withModalContext: WithModalContextType = Component => props => (
  <ModalContext.Consumer>
    {contextProps => <Component {...props} {...contextProps} />}
  </ModalContext.Consumer>
);
