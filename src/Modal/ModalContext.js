// @flow
import * as React from "react";

import type { WithModalContextType, ModalContextType } from "./ModalContext";

export const ModalContext: ModalContextType = React.createContext({
  setDimensions: () => {},
  decideFixedFooter: () => {},
  setHasModalSection: () => {},
  removeHasModalSection: () => {},
  manageFocus: () => {},
  hasModalSection: false,
  isMobileFullPage: false,
  isInsideModal: false,
  closable: false,
});

export const withModalContext: WithModalContextType = Component => props => (
  <ModalContext.Consumer>
    {/* $FlowFixMe(>=0.115.0) This comment suppresses an error found when upgrading Flow
     * to v0.115.0. To view the error, delete this comment and run Flow. */
    contextProps => <Component {...props} {...contextProps} />}
  </ModalContext.Consumer>
);
