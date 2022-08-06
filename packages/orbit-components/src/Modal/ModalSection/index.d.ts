// Type definitions for @kiwicom/orbit-components
// Project: http://github.com/kiwicom/orbit
import * as React from "react";

import * as Common from "../../common/common";
import { Props as ModalContextProps } from "../ModalContext";

export interface Props extends Common.Globals, ModalContextProps {
  readonly children: React.ReactNode;
  readonly suppressed?: boolean;
}
declare class ModalSection extends React.Component<Props> {}
export { ModalSection, ModalSection as default };
