// Type definitions for @kiwicom/orbit-components
// Project: http://github.com/kiwicom/orbit

import * as React from "react";
import { StyledComponent } from "styled-components";

import * as Common from "../common/common";

export type Indent = "none" | "small" | "medium" | "large" | "XLarge" | "XXLarge";
export type Align = "left" | "center" | "right";

export interface Props extends Common.SpaceAfter {
  indent?: Indent;
  align?: Align;
}

declare const Separator: React.FunctionComponent<Props>;
declare const StyledSeparator: StyledComponent<any, HTMLHRElement>;

export { Separator, StyledSeparator, Separator as default };
