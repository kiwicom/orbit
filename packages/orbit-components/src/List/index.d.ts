// Type definitions for @kiwicom/orbit-components
// Project: http://github.com/kiwicom/orbit

import * as React from "react";

import ListItem, { IconContainer } from "./ListItem";
import * as Common from "../common/common";

type Type = "primary" | "secondary" | "separated";

interface Props extends Common.Global, Common.SpaceAfter {
  readonly children: React.ReactNode;
  readonly size?: Common.Size;
  readonly type?: Type;
}

declare const List: React.FunctionComponent<Props>;
export { List, List as default, ListItem, IconContainer };
