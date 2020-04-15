// @flow
// Type definitions for @kiwicom/orbit-components
// Project: http://github.com/kiwicom/orbit-components

import * as React from "react";

import * as Common from "../common/common.d.ts";

declare module "@kiwicom/orbit-components/lib/Tag";

interface Props extends Common.Global {
  readonly children: React.ReactNode;
  readonly icon?: React.ReactNode;
  readonly selected?: boolean;
  readonly size?: Common.InputSize;
  readonly onRemove?: Common.Callback;
  readonly onClick?: Common.Callback;
}

const Tag: React.FunctionComponent<Props>;
export { Tag, Tag as default };
