// Type definitions for @kiwicom/orbit-components
// Project: http://github.com/kiwicom/orbit

import * as React from "react";

import * as Common from "../common/common";

interface Props extends Common.Global {
  readonly as?: string;
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
  readonly noHeaderIcon?: boolean;
  readonly htmlTitle?: string;
  readonly noPadding?: boolean;
}

declare const Tile: React.FunctionComponent<Props>;
export { Tile, Tile as default };
