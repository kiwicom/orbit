// @flow
// Type definitions for @kiwicom/orbit-components
// Project: http://github.com/kiwicom/orbit-components
import * as React from "react";

import * as Common from "../../common/common";
import { Props as ModalContextProps } from "../ModalContext";

declare module "@kiwicom/orbit-components/lib/Modal/ModalSection";

export interface Props extends Common.Global, ModalContextProps {
  readonly children: React.ReactNode;
  readonly suppressed?: boolean;
}
// eslint-disable-next-line react/prefer-stateless-function
declare class ModalSection extends React.Component<Props> {}
export { ModalSection, ModalSection as default };
