// @flow
// Type definitions for @kiwicom/orbit-components
// Project: http://github.com/kiwicom/orbit-components

import * as React from "react";

import { ModalHeaderType } from "./ModalHeader/index.d.ts";
import { ModalSectionType } from "./ModalSection/index.d.ts";
import { ModalFooterType } from "./ModalFooter/index.d.ts";
import * as Common from "../common/common.d.ts";

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
declare class Modal extends React.Component<Props, State> {}

declare const ModalHeader: ModalHeaderType;
declare const ModalSection: ModalSectionType;
declare const ModalFooter: ModalFooterType;

export { Modal, Modal as default, ModalHeader, ModalSection, ModalFooter };
