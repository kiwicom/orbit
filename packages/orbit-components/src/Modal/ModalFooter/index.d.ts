// Type definitions for @kiwicom/orbit-components
// Project: http://github.com/kiwicom/orbit
import * as React from "react";

import * as Common from "../../common/common";

export interface Props extends Common.Globals {
  readonly flex?: string | string[];
  readonly children: React.ReactNode;
}
declare class ModalFooter extends React.Component<Props> {}
export { ModalFooter, ModalFooter as default };
