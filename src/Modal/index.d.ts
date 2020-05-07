// @flow
// Type definitions for @kiwicom/orbit-components
// Project: http://github.com/kiwicom/orbit-components

import * as React from "react";

import * as Common from "../common/common";

declare module "@kiwicom/orbit-components/lib/Modal";

export interface Props extends Common.Global {
  readonly size?: Common.Size;
  readonly children: React.ReactNode;
  readonly onClose?: Common.Event<
    React.KeyboardEvent<HTMLDivElement> | React.SyntheticEvent<HTMLButtonElement> | React.MouseEvent
  >;
  readonly fixedFooter?: boolean;
  readonly isMobileFullPage?: boolean;
  readonly preventOverlayClose?: boolean;
}

export interface State {
  scrolled: boolean;
  loaded: boolean;
  fixedClose: boolean;
  fullyScrolled: boolean;
  modalWidth: number;
  footerHeight: number;
  hasModalSection: boolean;
}
// eslint-disable-next-line react/prefer-stateless-function
export class Modal extends React.Component<Props, State> {}
export { ModalHeader } from "./ModalHeader/index";
export { ModalSection } from "./ModalSection/index";
export { ModalFooter } from "./ModalFooter/index";
