// @flow
// Type definitions for @kiwicom/orbit-components
// Project: http://github.com/kiwicom/orbit-components

import * as React from "react";

import * as Common from "../common.d.ts";

declare module "@kiwicom/orbit-components/lib/Tag";

export { Tag, Tag as default };

declare namespace Tag {
  interface Props extends Common.Global {
    readonly children: React.ReactNode;
    readonly icon?: React.ReactNode;
    readonly selected?: boolean;
    readonly size?: Common.InputSize;
    readonly onRemove?: Common.Callback;
    readonly onClick?: Common.Callback;
  }
}

declare class Tag extends React.Component<Tag.Props> {}
