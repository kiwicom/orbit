// Type definitions for @kiwicom/orbit-components
// Project: http://github.com/kiwicom/orbit

import * as React from "react";

import * as Common from "../common/common";
declare module "@kiwicom/orbit-components/lib/Modal";

type Size = "extraSmall" | "small" | "normal" | "large";

export interface Props extends Common.Global {
  readonly size?: Size;
  readonly children: React.ReactNode;
  readonly onClose?: Common.Event<
    React.KeyboardEvent<HTMLDivElement> | React.SyntheticEvent<HTMLButtonElement> | React.MouseEvent
  >;
  readonly fixedFooter?: boolean;
  readonly isMobileFullPage?: boolean;
  readonly preventOverlayClose?: boolean;
  readonly hasCloseButton?: boolean;
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
declare class Modal extends React.Component<Props, State> {}
export { Modal, Modal as default };
export { ModalHeader } from "./ModalHeader/index";
export { ModalSection } from "./ModalSection/index";
export { ModalFooter } from "./ModalFooter/index";
