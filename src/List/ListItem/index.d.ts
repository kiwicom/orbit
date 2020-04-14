// @flow
// Type definitions for @kiwicom/orbit-components
// Project: http://github.com/kiwicom/orbit-components

import * as React from "react";

import * as Common from "../common/common.d.ts";

declare module "@kiwicom/orbit-components/lib/ListItem";

interface Props extends Common.Global {
  readonly children: React.ReactNode;
  readonly label?: Common.Translation;
  readonly icon?: React.ReactNode;
}

const ListItem: React.FunctionComponent<Props>;
export { ListItem, ListItem as default };
