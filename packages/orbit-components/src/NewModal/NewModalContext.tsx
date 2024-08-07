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

export const NewModalContext = React.createContext<Props>({
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
NewModalContext.displayName = "NewModalOrbitContext";
