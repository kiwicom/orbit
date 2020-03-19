// @flow
// Type definitions for @kiwicom/orbit-components
// Project: http://github.com/kiwicom/orbit-components

import * as React from "react";

import * as Common from "../common/common.d.ts";

declare module "@kiwicom/orbit-components/lib/Breadcrumbs";

export interface Props extends Common.Global, Common.SpaceAfter {
  readonly children: React.ReactNode;
  readonly onGoBack?: Common.Event<React.SyntheticEvent<HTMLButtonElement>>;
}

const Breadcrumbs: React.FunctionComponent<Props>;
export { Breadcrumbs, Breadcrumbs as default };
