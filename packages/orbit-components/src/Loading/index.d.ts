// Type definitions for @kiwicom/orbit-components
// Project: http://github.com/kiwicom/orbit

import * as React from "react";

import * as Common from "../common/common";

type Type = "buttonLoader" | "boxLoader" | "searchLoader" | "pageLoader" | "inlineLoader";

interface Props extends Common.Globals {
  readonly children?: React.ReactNode;
  readonly loading?: boolean;
  readonly type?: Type;
  readonly text?: Common.Translation;
}

declare const Loading: React.FunctionComponent<Props>;
export { Loading, Loading as default };
