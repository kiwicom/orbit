// @flow
import * as React from "react";

import type { ModalContextProps, WithModalContextType, ModalContextType } from "./ModalContext";

export const ModalContext: ModalContextType = React.createContext({
  setHasModalTitle: () => {},
  setHasModalSection: () => {},
  removeHasModalSection: () => {},
  callContextFunctions: () => {},
  hasModalSection: false,
  isMobileFullPage: false,
  isInsideModal: false,
  closable: false,
});
ModalContext.displayName = "ModalOrbitContext";

// $FlowFixMe
export const withModalContext: WithModalContextType = Component => props => (
  <ModalContext.Consumer>
    {
      /* $FlowFixMe(>=0.115.0) This comment suppresses an error found when upgrading Flow
       * to v0.115.0. To view the error, delete this comment and run Flow. */
      contextProps => <Component {...props} {...contextProps} />
    }
  </ModalContext.Consumer>
);

export const useModalContext = (): ModalContextProps => React.useContext(ModalContext);
