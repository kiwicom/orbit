// @flow
// Type definitions for @kiwicom/orbit-components
// Project: http://github.com/kiwicom/orbit-components

import * as React from "react";

import * as Common from "../common/common";

declare module "@kiwicom/orbit-components/lib/ButtonMobileStore";

type Type = "appStore" | "googlePlay" | "appStoreLight" | "googlePlayLight";

export interface Props extends Common.Global {
  readonly type?: Type;
  readonly stopPropagation?: boolean;
  readonly href?: string;
  readonly alt?: string;
  readonly onClick?: Common.Event;
}

declare const ButtonMobileStore: React.FunctionComponent<Props>;
export { ButtonMobileStore, ButtonMobileStore as default };
