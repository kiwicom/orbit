import * as React from "react";

export interface Props {
  readonly setDimensions?: () => void;
  readonly decideFixedFooter?: () => void;
  readonly setHasModalTitle?: React.Dispatch<React.SetStateAction<boolean>>;
  readonly setHasModalSection?: () => void;
  readonly removeHasModalSection?: () => void;
  readonly callContextFunctions?: () => void;
  readonly setFooterHeight?: React.Dispatch<React.SetStateAction<number>>;
  readonly manageFocus?: () => void;
  readonly hasModalSection?: boolean;
  readonly hasMobileHeader?: boolean;
  readonly isMobileFullPage?: boolean;
  readonly isInsideModal?: boolean;
  readonly closable?: boolean;
  readonly titleID?: string;
}

export const ModalContext = React.createContext<Props>({
  setHasModalTitle: () => {},
  setHasModalSection: () => {},
  removeHasModalSection: () => {},
  setFooterHeight: () => {},
  callContextFunctions: () => {},
  hasModalSection: false,
  hasMobileHeader: true,
  isMobileFullPage: false,
  isInsideModal: false,
  closable: false,
});
ModalContext.displayName = "ModalOrbitContext";

export const withModalContext = (Component: React.ComponentType<Props>) => (props: Props) => (
  <ModalContext.Consumer>
    {contextProps => <Component {...props} {...contextProps} />}
  </ModalContext.Consumer>
);

export const useModalContext = (): Props => React.useContext(ModalContext);
