// Type definitions for @kiwicom/orbit-components
// Project: http://github.com/kiwicom/orbit

import * as React from "react";

import ListItem from "./ListItem";
import * as Common from "../common/common";

export type Type = "primary" | "secondary" | "separated";

export interface Props extends Common.Globals, Common.SpaceAfter {
  readonly children: React.ReactNode;
  readonly size?: Common.Size;
  readonly type?: Type;
}

declare const List: React.FunctionComponent<Props>;
export { List, List as default, ListItem };
