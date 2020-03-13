// @flow
// Type definitions for @kiwicom/orbit-components
// Project: http://github.com/kiwicom/orbit-components

import * as React from "react";
import * as Common from "@kiwicom/orbit-components/common";
import ModalHeaderType from "@kiwicom/orbit-components/lib/Modal/ModalHeader";
import ModalSectionType from "@kiwicom/orbit-components/lib/Modal/ModalSection";

declare module "@kiwicom/orbit-components/lib/Modal";

export { Modal, Modal as default, ModalHeader, ModalSection };

declare namespace Modal {
  interface Props extends Common.Global {
    readonly size?: Common.Size;
    readonly children: React.ReactNode;
    readonly onClose?: Common.Event<
      | React.KeyboardEvent<HTMLDivElement>
      | React.SyntheticEvent<HTMLButtonElement>
      | React.MouseEvent
    >;
    readonly fixedFooter?: boolean;
    readonly isMobileFullPage?: boolean;
  }

  interface State {
    scrolled: boolean;
    loaded: boolean;
    fixedClose: boolean;
    fullyScrolled: boolean;
    modalWidth: number;
    footerHeight: number;
    hasModalSection: boolean;
  }
}

declare class Modal extends React.Component<Modal.Props> {}

declare let ModalHeader: ModalHeaderType;
declare let ModalSection: ModalSectionType;
