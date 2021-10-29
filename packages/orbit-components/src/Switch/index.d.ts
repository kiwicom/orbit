// Type definitions for @kiwicom/orbit-components
// Project: http://github.com/kiwicom/orbit

import * as React from "react";

import * as Common from "../common/common";

export interface Props extends Common.Global, Common.Ref {
  readonly icon?: React.ReactNode;
  readonly checked: boolean;
  readonly ariaLabelledby?: string;
  readonly disabled?: boolean;
  readonly onChange: Common.Event<React.SyntheticEvent<HTMLInputElement>>;
  readonly onFocus?: Common.Event<React.SyntheticEvent<HTMLInputElement>>;
  readonly onBlur?: Common.Event<React.SyntheticEvent<HTMLInputElement>>;
}

declare const Switch: React.ForwardRefRenderFunction<HTMLInputElement, Props>;
export { Switch, Switch as default };
