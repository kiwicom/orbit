// @flow
// Type definitions for @kiwicom/orbit-components
// Project: http://github.com/kiwicom/orbit-components
import * as React from "react";

import * as Common from "../../common/common";

declare module "@kiwicom/orbit-components/lib/Modal/ModalFooter";

export interface Props extends Common.Global {
  readonly flex?: string | Array<string>;
  readonly children: React.ReactNode;
}
// eslint-disable-next-line react/prefer-stateless-function
declare class ModalFooter extends React.Component<Props> {}
export { ModalFooter, ModalFooter as default };
