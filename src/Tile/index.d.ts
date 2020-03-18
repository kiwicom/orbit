// @flow
// Type definitions for @kiwicom/orbit-components
// Project: http://github.com/kiwicom/orbit-components

import * as React from "react";

import * as Common from "../common.d.ts";

declare module "@kiwicom/orbit-components/lib/Tile";

export { Tile, Tile as default };

declare namespace Tile {
  interface Props {
    readonly title?: React.ReactNode;
    readonly description?: React.ReactNode;
    readonly icon?: React.ReactNode;
    readonly children?: React.ReactNode;
    readonly external?: boolean;
    readonly href?: string;
    readonly onClick?: Common.Event<
      React.SyntheticEvent<HTMLDivElement> | React.KeyboardEvent<HTMLElement>
    >;
    readonly expanded?: boolean;
  }

  interface State {
    expanded?: boolean;
    initialExpanded?: boolean;
  }
}

declare class Tile extends React.Component<Tile.Props> {}
