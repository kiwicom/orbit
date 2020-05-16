// @flow
// Type definitions for @kiwicom/orbit-components
// Project: http://github.com/kiwicom/orbit-components

import * as React from "react";

import ListItem from "./ListItem";
import * as Common from "../common/common";

declare module "@kiwicom/orbit-components/lib/List";

type Type = "primary" | "secondary" | "separated";

interface Props extends Common.Global, Common.SpaceAfter {
  readonly children: React.ReactNode;
  readonly size?: Common.Size;
  readonly type?: Type;
}

declare const List: React.FunctionComponent<Props>;
export { List, List as default, ListItem };
