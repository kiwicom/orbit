// Type definitions for @kiwicom/orbit-components
// Project: http://github.com/kiwicom/orbit

import * as React from "react";

import * as Common from "../common/common";

export interface Props extends Common.Global {
  readonly children: React.ReactNode;
  readonly className?: string;
  readonly filled?: boolean;
  readonly disabled?: boolean;
  readonly required?: boolean;
  readonly id?: string;
  readonly error?: boolean;
  readonly help?: boolean;
  readonly iconRef?: Common.Ref;
  readonly labelRef?: Common.Ref;
  readonly inlineLabel?: boolean;
  readonly onMouseEnter?: Common.Event<React.SyntheticEvent<HTMLElement>>;
  readonly onMouseLeave?: Common.Event<React.SyntheticEvent<HTMLElement>>;
}

declare const FormLabel: React.FunctionComponent<Props>;
export { FormLabel, FormLabel as default };
