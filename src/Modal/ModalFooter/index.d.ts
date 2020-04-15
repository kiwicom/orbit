// @flow
// Type definitions for @kiwicom/orbit-components
// Project: http://github.com/kiwicom/orbit-components
import * as React from "react";

import * as Common from "../../common/common.d.ts";
import { Props as ModalContextProps } from "../ModalContext.d.ts";

declare module "@kiwicom/orbit-components/lib/Modal/ModalFooter";

export interface Props extends Common.Global, ModalContextProps {
  readonly type: "Search" | "Booking" | "MMB";
  readonly children: React.ReactNode;
}
// eslint-disable-next-line react/prefer-stateless-function
declare class ModalFooter extends React.Component<Props> {}
export { ModalFooter, ModalFooter as default };
