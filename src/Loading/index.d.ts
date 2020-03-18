// @flow
// Type definitions for @kiwicom/orbit-components
// Project: http://github.com/kiwicom/orbit-components

import * as React from "react";

import * as Common from "../common.d.ts";

declare module "@kiwicom/orbit-components/lib/Loading";

export { Loading, Loading as default };

declare namespace Loading {
  type Type = "buttonLoader" | "boxLoader" | "searchLoader" | "pageLoader" | "inlineLoader";

  interface Props extends Common.Global {
    readonly children?: React.ReactNode;
    readonly loading?: boolean;
    readonly type?: Type;
    readonly text?: Common.Translation;
  }
}

declare class Loading extends React.Component<Loading.Props> {}
