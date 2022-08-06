// @noflow
// Type definitions for @kiwicom/orbit-components
// Project: http://github.com/kiwicom/orbit

import * as React from "react";

import * as Common from "../common/common";

type Type = "appStore" | "googlePlay";
export interface Props extends Common.Globals {
  readonly type?: Type;
  readonly stopPropagation?: boolean;
  readonly href?: string;
  readonly alt?: string;
  readonly lang?: string;
  readonly onClick?: Common.Event<React.SyntheticEvent<HTMLLinkElement>>;
}

declare const ButtonMobileStore: React.FunctionComponent<Props>;
export { ButtonMobileStore, ButtonMobileStore as default };
