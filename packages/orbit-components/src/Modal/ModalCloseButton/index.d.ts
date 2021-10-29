// Type definitions for @kiwicom/orbit-components
// Project: http://github.com/kiwicom/orbit
import * as React from "react";

import * as Common from "../../common/common";

export interface Props extends Common.Global {
  readonly onClick?: Common.Event<React.SyntheticEvent<HTMLButtonElement>>;
}

declare class ModalCloseButton extends React.Component<Props> {}
export { ModalCloseButton, ModalCloseButton as default };
