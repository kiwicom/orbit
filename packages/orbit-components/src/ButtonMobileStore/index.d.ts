// @noflow
// Type definitions for @kiwicom/orbit-components
// Project: http://github.com/kiwicom/orbit

import * as React from "react";

import * as Common from "../common/common";

declare module "@kiwicom/orbit-components/lib/ButtonMobileStore";

type Type = "appStore" | "googlePlay";
type Variant = "light" | "dark";

export interface Props extends Common.Global {
  readonly type?: Type;
  readonly variant?: Variant;
  readonly stopPropagation?: boolean;
  readonly href?: string;
  readonly alt?: string;
  readonly onClick?: Common.Event<React.SyntheticEvent<HTMLLinkElement>>;
}

declare const ButtonMobileStore: React.FunctionComponent<Props>;
export { ButtonMobileStore, ButtonMobileStore as default };
