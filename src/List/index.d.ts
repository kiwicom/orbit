// @flow
// Type definitions for @kiwicom/orbit-components
// Project: http://github.com/kiwicom/orbit-components

import * as React from "react";

import * as Common from "../common/common.d.ts";

declare module "@kiwicom/orbit-components/lib/List";

type Type = "primary" | "secondary" | "separated";

interface Props extends Common.Global, Common.SpaceAfter {
  readonly children: React.ReactNode;
  readonly size?: Common.Size;
  readonly type?: Type;
}

const List: React.FunctionComponent<Props>;
export { List, List as default };
