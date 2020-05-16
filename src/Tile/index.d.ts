// @flow
// Type definitions for @kiwicom/orbit-components
// Project: http://github.com/kiwicom/orbit-components

import * as React from "react";

import * as Common from "../common/common";

declare module "@kiwicom/orbit-components/lib/Tile";

interface Props extends Common.Global {
  readonly title?: React.ReactNode;
  readonly description?: React.ReactNode;
  readonly icon?: React.ReactNode;
  readonly header?: React.ReactNode;
  readonly children?: React.ReactNode;
  readonly external?: boolean;
  readonly href?: string;
  readonly onClick?: Common.Event<
    React.SyntheticEvent<HTMLDivElement> | React.KeyboardEvent<HTMLElement>
  >;
  readonly expandable?: boolean;
  readonly initialExpanded?: boolean;
  readonly noPadding?: boolean;
}

declare const Tile: React.FunctionComponent<Props>;
export { Tile, Tile as default };
