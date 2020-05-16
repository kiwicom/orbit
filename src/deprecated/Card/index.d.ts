// @flow
// Type definitions for @kiwicom/orbit-components
// Project: http://github.com/kiwicom/orbit-components

import * as React from "react";

import * as Common from "../../common/common";

declare module "@kiwicom/orbit-components/lib/deprecated/Card";

interface Props extends Common.Global, Common.SpaceAfter {
  readonly children: React.ReactNode;
  readonly closable: React.ReactNode;
  readonly onClose?: Common.Event<React.SyntheticEvent<HTMLButtonElement>>;
}

export const DeprecatedCard: React.FunctionComponent<Props>;
export * from "./CardHeader/index";
export * from "./CardSection/index";
