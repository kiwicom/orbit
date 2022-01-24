// Type definitions for @kiwicom/orbit-components
// Project: http://github.com/kiwicom/orbit

import * as React from "react";

import * as Common from "../common/common";

interface Props extends Common.SpaceAfter {
  indent?: "none" | "small" | "medium" | "large" | "XLarge" | "XXLarge";
  align?: "left" | "right" | "center";
}

declare const Separator: React.FunctionComponent<Props>;
export { Separator, Separator as default };
