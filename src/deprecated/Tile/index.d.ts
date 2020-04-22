// @flow
// Type definitions for @kiwicom/orbit-components
// Project: http://github.com/kiwicom/orbit-components

import * as React from "react";

import * as Common from "../../common/common.d.ts";
import { TileExpandableType } from "./TileExpandable/index.d.ts";
import { TileHeaderType } from "./TileHeader/index.d.ts";

declare module "@kiwicom/orbit-components/lib/deprecated/Tile";

interface Props extends Common.Global {
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

declare const TileExpandable: TileExpandableType;
declare const TileHeader: TileHeaderType;

const Tile: React.FunctionComponent<Props>;
export { Tile, Tile as default, TileExpandable, TileHeader };
